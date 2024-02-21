import { createApp } from 'vue/dist/vue.esm-bundler.js';
import './style.css';
import 'vue-multiselect/dist/vue-multiselect.css';
import App from './App.vue'
import router from "./router";
import Multiselect from 'vue-multiselect'
import {store} from "./store/store";

const app = createApp(App);
app.use(router).use(store).component('multiselect', Multiselect).mount('#app');
