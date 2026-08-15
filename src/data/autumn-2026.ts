export type AutumnCollection = {
  id: "mizuha" | "sen";
  name: string;
  japaneseName: string;
  concept: string;
  description: string;
};

export type AutumnProduct = {
  slug: string;
  collectionId: AutumnCollection["id"];
  collectionName: string;
  name: string;
  category: string;
  description: string;
  price: string;
  madeIn: "日本";
};

export const autumn2026Collections: AutumnCollection[] = [
  {
    id: "mizuha",
    name: "MIZUHA",
    japaneseName: "瑞葉",
    concept: "雫が描く、静かな光の輪郭。",
    description: "水面に落ちる雫の、一瞬のやわらかな緊張と光の余韻を写し取ったコレクション。",
  },
  {
    id: "sen",
    name: "SEN",
    japaneseName: "線",
    concept: "しなやかな線が、身体の動きに寄り添う。",
    description: "流れるような曲線と余白で、身につける人の所作を美しく見せるコレクション。",
  },
];

const mizuha = [
  ["Mizuha Drop Earrings", "ピアス"],
  ["Mizuha Dew Studs", "ピアス"],
  ["Mizuha Ripple Ring", "リング"],
  ["Mizuha Tear Ring", "リング"],
  ["Mizuha Halo Pendant", "ネックレス"],
  ["Mizuha Still Necklace", "ネックレス"],
  ["Mizuha Current Bracelet", "ブレスレット"],
  ["Mizuha Mist Cuff", "ブレスレット"],
  ["Mizuha Dew Hairpin", "ヘアジュエリー"],
  ["Mizuha Raindrop Brooch", "ブローチ"],
] as const;

const sen = [
  ["Sen Arc Earrings", "ピアス"],
  ["Sen Fold Studs", "ピアス"],
  ["Sen Curve Ring", "リング"],
  ["Sen Flow Ring", "リング"],
  ["Sen Line Pendant", "ネックレス"],
  ["Sen Sway Necklace", "ネックレス"],
  ["Sen Soft Cuff", "ブレスレット"],
  ["Sen Ribbon Chain", "ブレスレット"],
  ["Sen Loop Hairpin", "ヘアジュエリー"],
  ["Sen Trace Brooch", "ブローチ"],
] as const;

function productsFor(
  collection: AutumnCollection,
  products: readonly (readonly [string, string])[],
): AutumnProduct[] {
  return products.map(([name, category]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    collectionId: collection.id,
    collectionName: collection.name,
    name,
    category,
    description:
      collection.id === "mizuha"
        ? "雫のやわらかな丸みと、光を受ける繊細な陰影を表現した一点です。"
        : "しなやかな曲線が、身体の動きに自然に寄り添うよう設計した一点です。",
    price: "価格は後日発表",
    madeIn: "日本",
  }));
}

export const autumn2026Products = [
  ...productsFor(autumn2026Collections[0], mizuha),
  ...productsFor(autumn2026Collections[1], sen),
];
