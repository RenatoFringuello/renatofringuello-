import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppPageNotFound from './pages/AppPageNotFound.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : AppHome
        },
        {
            path: '/404', name: 'NotFound', component: AppPageNotFound
        },
        {
            path: '/:catchAll(.*)', redirect:'404'
        },
    ],
});

export {router};