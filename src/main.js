import { createApp } from 'vue'
import App from './App.vue'
//跑马灯效果
import Vue3Marquee from "vue3-marquee";
import 'vue3-marquee/dist/style.css'
//
import router from '@/router';
import store from '@/store'

import 'vant/lib/index.css';
import getVant from "@/plugins";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vue3Marquee);
getVant(app);
app.mount('#app');
