import { createApp } from 'vue'
import App from './App.vue'
import ComponentA from "@/components/ImageCard.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/reset.css";

const app = createApp(App);

app.component("ComponentA", ComponentA)
    .use(VueAxios, axios)
    .mount('#app')
