import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/Routing/Main";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
