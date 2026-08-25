// ブラウザ側で言語状態を読み書きするための共通ヘルパー。localStorage を主、Cookie を補助（SSR/初回描画向け）として使う。
import { defaultLang, languages, ui, type Lang } from "./ui";

const STORAGE_KEY = "asiantte:lang";
const COOKIE_KEY = "lang";

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && value in languages;
}

export function getStoredLang(): Lang {
  if (typeof window === "undefined") return defaultLang;

  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(fromStorage)) return fromStorage;

  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]+)`));
  const fromCookie = match ? decodeURIComponent(match[1]) : null;
  if (isLang(fromCookie)) return fromCookie;

  return defaultLang;
}

export function setStoredLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  document.cookie = `${COOKIE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
}

export function translate(lang: Lang, key: string): string {
  const dict = ui[lang] as Record<string, string>;
  return dict[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
}

// 言語切替時に全ページへ通知するためのカスタムイベント名。
export const LANG_CHANGE_EVENT = "asiantte:langchange";

export function applyLang(lang: Lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = translate(lang, key);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-detail]").forEach((el) => {
    const key = el.dataset.i18nDetail;
    if (key) el.dataset.detail = translate(lang, key);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key) el.setAttribute("aria-label", translate(lang, key));
  });

  document.querySelectorAll<HTMLElement>("[data-lang-toggle] [data-lang-option]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.langOption === lang);
  });

  document.dispatchEvent(new CustomEvent<Lang>(LANG_CHANGE_EVENT, { detail: lang }));
}

export function initLangSwitcher() {
  const lang = getStoredLang();
  applyLang(lang);

  document.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.langOption;
      if (!isLang(next)) return;
      setStoredLang(next);
      applyLang(next);
    });
  });
}
