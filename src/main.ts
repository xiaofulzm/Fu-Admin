import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "~/styles/css/index.css";

import loadPlugins from "./plugins";
("./plugins");

const app = createApp(App);

loadPlugins(app);

app.use(store).use(router);
app.mount("#app");
