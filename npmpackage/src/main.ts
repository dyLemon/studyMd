import { createApp } from "vue";
import App from "./App.vue";
import ui from "duyingui-package";
const vue = createApp(App);

vue.use(ui);
console.log(vue);
vue.mount("#app");
