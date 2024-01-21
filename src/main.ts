import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "~/styles/css/index.css";

import "~/router/permission";

import loadPlugins from "./plugins";

const app = createApp(App);

loadPlugins(app);

app.use(store).use(router);
app.mount("#app");
