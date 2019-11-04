import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import profile from './modules/profile/store';

require('./bootstrap');

window.Vue = require('vue');
Vue.use(Vuex);


const app = new Vue({
    render: h => h(App),
    store: new Vuex.Store(store),
    router
}).$mount('#app');
