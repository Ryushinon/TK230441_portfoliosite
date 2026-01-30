// Content Data for VFX Portfolio

export const profileData = {
    name: "YOUR NAME",
    title: "VFX Artist / Effects Designer",
    subtitle: "心理的・認知的根拠に基づいたエフェクト表現",
};

export const philosophyData = {
    mainMessage: "心理的・認知的根拠に基づいたエフェクト表現",
    description: `プレイヤーの視線誘導、感情喚起、そしてゲーム体験の向上を目指し、
  認知心理学やゲシュタルト原則に基づいたエフェクトデザインを追求しています。
  
  単なる派手さではなく、「なぜこのエフェクトが効果的なのか」を常に考え、
  プレイヤーに直感的に伝わる視覚表現を大切にしています。`,
    keyPoints: [
        { title: "視線誘導", description: "プレイヤーの注意を適切なタイミングで適切な場所へ導く" },
        { title: "感情設計", description: "色彩・動き・タイミングで感情的インパクトを最大化" },
        { title: "認知負荷の最適化", description: "情報を整理し、直感的に理解できるビジュアル設計" },
    ],
};

export const worksData = [
    {
        id: 1,
        title: "爆発エフェクト",
        category: "VFX",
        thumbnail: "https://picsum.photos/seed/vfx1/400/300",
        videoUrl: null,
        description: "リアルタイム爆発シミュレーション",
        tags: ["Unity", "VFX Graph"],
    },
    {
        id: 2,
        title: "魔法陣エフェクト",
        category: "VFX",
        thumbnail: "https://picsum.photos/seed/vfx2/400/300",
        videoUrl: null,
        description: "ファンタジー系スキルエフェクト",
        tags: ["Unreal Engine", "Niagara"],
    },
    {
        id: 3,
        title: "UI Icon Set",
        category: "2D Design",
        thumbnail: "https://picsum.photos/seed/2d1/400/300",
        videoUrl: null,
        description: "ゲームUI用アイコンデザイン",
        tags: ["Photoshop", "Illustrator"],
    },
    {
        id: 4,
        title: "パーティクルシステム",
        category: "VFX",
        thumbnail: "https://picsum.photos/seed/vfx3/400/300",
        videoUrl: null,
        description: "汎用パーティクルライブラリ",
        tags: ["Unity", "Shader Graph"],
    },
    {
        id: 5,
        title: "炎・煙エフェクト",
        category: "VFX",
        thumbnail: "https://picsum.photos/seed/vfx4/400/300",
        videoUrl: null,
        description: "EmberGenを使用した流体シミュレーション",
        tags: ["EmberGen", "After Effects"],
    },
    {
        id: 6,
        title: "コンセプトアート",
        category: "Others",
        thumbnail: "https://picsum.photos/seed/other1/400/300",
        videoUrl: null,
        description: "エフェクトのコンセプトスケッチ",
        tags: ["Photoshop", "Procreate"],
    },
];

export const skillsData = [
    { name: "Unity", level: 85, icon: "unity" },
    { name: "Unreal Engine", level: 75, icon: "unreal" },
    { name: "Maya", level: 70, icon: "maya" },
    { name: "Blender", level: 65, icon: "blender" },
    { name: "Photoshop", level: 80, icon: "photoshop" },
    { name: "After Effects", level: 75, icon: "aftereffects" },
    { name: "EmberGen", level: 60, icon: "embergen" },
];

export const roadmapData = [
    {
        year: "2024年 3年生",
        title: "エフェクトデザイナーへの転向",
        description: "2Dデザインからリアルタイムエフェクト制作へ。Unity VFX Graphの学習を開始。",
        icon: "pivot",
    },
    {
        year: "2024年 後期",
        title: "技術習得期間",
        description: "Unreal Engine Niagara、EmberGenなど複数のツールを習得。ポートフォリオ制作を本格化。",
        icon: "learn",
    },
    {
        year: "2025年 4年生",
        title: "卒業研究",
        description: "認知心理学に基づいたエフェクトデザイン手法の研究。実践的なゲームエフェクト制作。",
        icon: "research",
    },
    {
        year: "2025年 後期",
        title: "就職活動",
        description: "ゲーム業界エフェクトデザイナーとしての就職を目指す。",
        icon: "career",
    },
];

export const categories = ["ALL", "VFX", "2D Design", "Others"];
