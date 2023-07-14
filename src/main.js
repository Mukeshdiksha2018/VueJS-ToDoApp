import router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import Vue from 'vue';
Vue.use(ElementUI, {

    locale
  
  });

  new Vue({

    render: h => h(App),
  
    router,
  
  }).$mount('#app')