import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import VueChartKick from 'vue-chartkick';
import chartjs from 'chart.js';
import Toasted from 'vue-toasted';

import './assets/css/animation.css';
import './assets/css/bootstrap.min.css';
import './assets/css/minimal-icons-codes.css';
import './assets/css/minimal-icons.css';
import './assets/css/toastr.min.css';
import './assets/css/minimal-icons-ie7-codes.css';
import './assets/css/minimal-icons-ie7.css';
import './assets/css/style.css';
import './assets/js/jquery';
import './assets/js/sparkline.js';

export const SocketInstance = socketio("http://35.201.27.110:8000",{
  'reconnection': true,
  'reconnectionDelay': 1000,
  'reconnectionAttempts': 10
});

Vue.use(VueSocketIO, SocketInstance);
Vue.use(VueChartKick, { adapter: chartjs });
Vue.use(Toasted)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
