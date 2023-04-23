import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppPageStatusCode from './pages/AppPageStatusCode.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : AppHome
        },
        {
            path : '/projects',
            name : 'projects',
            component : AppHome
        },
        {
            path : '/about-me',
            name : 'about',
            component : AppHome
        },
        {
            path: '/400', 
            name: '400', 
            component: AppPageStatusCode
        },
        {
            path: '/401', 
            name: '402', 
            component: AppPageStatusCode
        },
        {
            path: '/403', 
            name: '403', 
            component: AppPageStatusCode
        },
        {
            path: '/404', 
            name: '404', 
            component: AppPageStatusCode
        },
        {
            path: '/429', 
            name: '429', 
            component: AppPageStatusCode
        },
        {
            path: '/:catchAll(.*)', redirect:'404'
        },
    ],
});

export {router};