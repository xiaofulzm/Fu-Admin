import { createPinia } from "pinia";
const store = createPinia();

export default store;

export * from "./modules/settings";
export * from "./modules/user";
export * from "./modules/router";
export * from "./modules/theme";
