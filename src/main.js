import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router1 from "./components/Routes/Main";
// import router from "./components/Routing/Main";

const app = createApp(App);
app.use(createPinia());
// app.use(router);
app.use(router1);
app.mount("#app");
