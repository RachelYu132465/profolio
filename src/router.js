import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/Home',  name:'Landing', component: () =>import('./components/Home')},
       
        {path:'/Product',  name:'Product', component: () =>import('./components/Product')},
    ]
});

export default router;