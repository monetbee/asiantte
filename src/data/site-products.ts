export type SiteProduct = {
  name: string;
  category: string;
  price: string;
  description: string;
};

export const categoryProducts: Record<string, SiteProduct[]> = {
  gift: [
    { name: "Gift Dew Charm", category: "ギフト / チャーム", price: "¥16,500", description: "大切な人へ贈る、雫のような光を閉じ込めたチャーム。" },
    { name: "Gift Ribbon Ring", category: "ギフト / リング", price: "¥22,000", description: "結び目のような曲線に、想いを託すギフトリング。" },
    { name: "Gift Pair Studs", category: "ギフト / ピアス", price: "¥19,800", description: "日常にそっと寄り添う、ペアでも楽しめるスタッズ。" },
  ],
  rings: [
    { name: "Contour Ring", category: "リング", price: "¥24,200", description: "指の動きに沿う、なめらかな輪郭のリング。" },
    { name: "Quiet Signet", category: "リング", price: "¥28,600", description: "静かな存在感を持つ、現代的なシグネットリング。" },
    { name: "Mizuha Halo Ring", category: "リング", price: "¥35,200", description: "水面に浮かぶ光の輪を表現したリング。" },
  ],
  earrings: [
    { name: "The Drop Mini", category: "ピアス", price: "¥18,700", description: "Asiantteのシグネチャーを小さく仕立てたピアス。" },
    { name: "Soft Arc Hoops", category: "ピアス", price: "¥26,400", description: "耳元にやわらかな曲線を描くフープピアス。" },
    { name: "Dewlight Earrings", category: "ピアス", price: "¥31,900", description: "朝露のような輝きをまとったドロップピアス。" },
  ],
  bracelets: [
    { name: "Sway Bracelet", category: "ブレスレット", price: "¥29,700", description: "手首の所作に合わせてしなやかに揺れるブレスレット。" },
    { name: "Fine Current", category: "ブレスレット", price: "¥38,500", description: "流れる水のようなラインを描くチェーンブレスレット。" },
    { name: "Open Cuff", category: "ブレスレット", price: "¥42,900", description: "余白を残したミニマルなオープンカフ。" },
  ],
  necklaces: [
    { name: "Still Pendant", category: "ネックレス", price: "¥27,500", description: "首元に静かな光を添えるペンダント。" },
    { name: "Sen Line Necklace", category: "ネックレス", price: "¥36,300", description: "しなやかな線がデコルテに沿うネックレス。" },
    { name: "Cascade Pearl Chain", category: "ネックレス", price: "¥49,500", description: "小さな光が連なる、繊細なチェーンネックレス。" },
  ],
};

export const newArrivals: SiteProduct[] = [
  { name: "MIZUHA First Dew", category: "2026 Autumn / MIZUHA", price: "¥33,000", description: "雫の最初の一滴を思わせる、秋の新作ペンダント。" },
  { name: "SEN Fluid Arc", category: "2026 Autumn / SEN", price: "¥41,800", description: "身体の動きに寄り添う、しなやかなアークピアス。" },
  { name: "MIZUHA Ripple Ring", category: "2026 Autumn / MIZUHA", price: "¥29,700", description: "水面の波紋を一周のラインにした新作リング。" },
  { name: "SEN Soft Cuff", category: "2026 Autumn / SEN", price: "¥45,100", description: "軽やかな曲線が手首を包む新作カフ。" },
];
