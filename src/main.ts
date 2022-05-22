import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

createApp(App).use(router).provide("store", store).mount("#app");
