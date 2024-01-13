export {};
declare module "vue" {
  export interface GlobalComponents {
    SvgIcon: (typeof import("~/components/svgIcon/index.vue"))["default"];
  }
}
