import { type App } from "vue";
import SvgIcon from "~/components/svgIcon/index.vue";
import "virtual:svg-icons-register";

export default function loadSvg(app: App) {
  app.component(SvgIcon.name, SvgIcon);
}
