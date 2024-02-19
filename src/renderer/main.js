import { createApp } from 'vue/dist/vue.esm-bundler.js';
import './style.css';
import App from './App.vue'
import router from "./router";
import {store} from "./store/store";

const app = createApp(App);
app.use(router).use(store).mount('#app');
