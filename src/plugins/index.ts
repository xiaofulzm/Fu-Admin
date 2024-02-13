import { type App } from "vue";

import "uno.css";
import loadSvg from "~/assets/icon/index";

export default function loadPlugins(app: App) {
  loadSvg(app);
}
