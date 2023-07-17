import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import Vue from 'vue';

import Todo from './Components/Todo.vue'


const routes =  [
    {path: '/todo', name:'todo', component : Todo }
]


Vue.use(ElementUI, {

    locale
  
  });


const router = new VueRouter({ routes, }); 


  new Vue({

    render: h => h(App),
  
    router,
  
  }).$mount('#app')