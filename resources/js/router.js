import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from './components/MainComponent';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/home', 
            component: MainComponent 
        }
    ]
});