import Vue from "vue";

Vue.config.ignoredElements = [/^ion-/];

import "@/assets/sass/app.scss";
import App from "./App.vue";
import router from "./Routes/routes";

Vue.config.productionTip = false;

new Vue({
  router,
  data: {},

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App),
}).$mount("#app");
