import router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Vue from 'vue';
Vue.use(ElementUI, {

    locale
  
  });

  new Vue({

    render: h => h(App),
  
    router,
  
    store
  
  }).$mount('#app')