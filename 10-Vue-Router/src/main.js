import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import router from "@/router";
import axios from "axios";
import appAxios from "@/utils/appAxios";

const app = createApp(App)
app.use(router)
// Axios'u global olarak import ederek sadece değişken şeklinde kullanabiliriz.
//app.config.globalProperties.$axios = axios
app.config.globalProperties.$appAxios = appAxios
app.mount("#app");
