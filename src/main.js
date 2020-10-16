import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap-vue";
import "./scss/main.scss";
import "normalize.css";
import "./filter";
Vue.config.productionTip = false;
Vue.directive('bold',{
   bind: function(el){
     el.style.fontweight = "bold";
   }
});
new Vue({
  router,
  store,
  /*
  render:function(createElement){ //  render: h => h(App)
      return createElement(App); 
  },
  **/
  // el: '#app', // .$mount('#app')
  render: h => h(App)
}).$mount("#app");
