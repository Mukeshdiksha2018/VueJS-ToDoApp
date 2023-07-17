import VueRouter from 'vue-router';
import Vue from 'vue';
import Todo from '../Components/Todo.vue'

Vue.use(VueRouter)

const routes =  [
    {path: '/todo', name:'todo', component : Todo }
]


  const router = new router({

    mode: 'history',

    base: process.env.BASE_URL,

    routes

})

export default router;