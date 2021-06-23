import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCarousel from "vue-carousel";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  created() {
    AOS.init();
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
