import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


//初始化css&自定義css&Element-ui
import 'normalize.css'
// import ElementUI from 'element-ui'
import '@/styles/element-config'
import '@/styles/element-variables.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
