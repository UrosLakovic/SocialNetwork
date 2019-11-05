import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from './components/MainComponent';
import Profile from './components/Profile';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
            name: 'home',
            path: '/home', 
            component: MainComponent 
        },
        {
            name: 'profile',
            path:'/users/:id',
            component: Profile
        }
    ]
});