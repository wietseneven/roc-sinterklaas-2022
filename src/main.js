import Vue from "vue";
import VueRouter from 'vue-router'
import App from "./App.vue";

import Login from './pages/Login';
import Home from './pages/Home';

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
