import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "~/styles/css/index.css";

import "./plugins";

const app = createApp(App);

app.use(store).use(router);
app.mount("#app");
