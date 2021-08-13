import Vue from 'vue';
import App from './App.vue';
import {routes} from "./router/index";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/style.css';
import axios from "axios";

axios.defaults.baseURL = "https://rest.entitysport.com/v2/";
Vue.prototype.$accessToken = "437214169d9be2a73e91d22f76f68b52"

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
