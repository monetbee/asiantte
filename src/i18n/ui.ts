// サイト全体で共有する言語辞書。ここにキーを追加すれば SiteMenu 以外のコンポーネントからも再利用できる。
export const languages = {
  ja: "日本語",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "ja";

export const ui = {
  ja: {
    "nav.menuOpen": "メニューを開く",
    "nav.about": "About",
    "nav.about.detail": "Asiantteの世界観と、ブランドが大切にする美しさ",
    "nav.collection": "Collection",
    "nav.collection.detail": "2026年秋の二つのコレクションと全20製品",
    "nav.founding": "Founding Access",
    "nav.founding.detail": "先行情報と予約開始のお知らせ",
    "nav.contact": "Contact",
    "nav.contact.detail": "Asiantteへのお問い合わせ",
    "nav.gift": "ギフト",
    "nav.gift.detail": "大切な人へ贈る、記憶に残るジュエリー",
    "nav.rings": "リング",
    "nav.rings.detail": "手元に静かな存在感を添えるリング",
    "nav.earrings": "ピアス",
    "nav.earrings.detail": "光を受け、表情を引き立てるピアス",
    "nav.bracelets": "ブレスレット",
    "nav.bracelets.detail": "所作に寄り添い、やわらかく揺れるブレスレット",
    "nav.necklaces": "ネックレス",
    "nav.necklaces.detail": "首元に美しい余白をつくるネックレス",
    "nav.categories": "カテゴリー",
    "nav.categories.detail": "ジュエリーをカテゴリーから探す",
    "nav.new": "新作",
    "nav.new.detail": "最新のコレクションと新着アイテム",
    "nav.fineJewelry": "ファインジュエリー",
    "nav.fineJewelry.detail": "職人の技術と素材にこだわったジュエリー",
  },
  en: {
    "nav.menuOpen": "Open menu",
    "nav.about": "About",
    "nav.about.detail": "Discover the Asiantte world and the beauty our brand holds dear",
    "nav.collection": "Collection",
    "nav.collection.detail": "Two Autumn 2026 collections featuring 20 pieces in total",
    "nav.founding": "Founding Access",
    "nav.founding.detail": "Early access details and reservation announcements",
    "nav.contact": "Contact",
    "nav.contact.detail": "Get in touch with Asiantte",
    "nav.gift": "Gifts",
    "nav.gift.detail": "Jewelry gifts that become lasting memories for someone special",
    "nav.rings": "Rings",
    "nav.rings.detail": "Rings that bring quiet presence to your hands",
    "nav.earrings": "Earrings",
    "nav.earrings.detail": "Earrings that catch the light and enhance your expression",
    "nav.bracelets": "Bracelets",
    "nav.bracelets.detail": "Bracelets that move gently with every gesture",
    "nav.necklaces": "Necklaces",
    "nav.necklaces.detail": "Necklaces that create beautiful space around the neckline",
    "nav.categories": "Categories",
    "nav.categories.detail": "Explore jewelry by category",
    "nav.new": "New Arrivals",
    "nav.new.detail": "The latest collection and newly arrived items",
    "nav.fineJewelry": "Fine Jewelry",
    "nav.fineJewelry.detail": "Jewelry crafted with masterful technique and premium materials",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
