declare interface MenuItem {
  label: string;
  key: string;
  icon: string;
  show: boolean;
  path: string;
  children?: MenuItem[];
}

type TransformMenuOption = import("naive-ui").MenuOption & MenuItem[];
