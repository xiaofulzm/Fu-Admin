// 项目配置
export interface LayoutSettings {
  layoutMode: "left" | "top" | "leftMix"; // 布局模式
}

export const defaultSettings: LayoutSettings = {
  layoutMode: "left",
};
