import {createRouter, createWebHistory} from 'vue-router'
import Products from '../views.vue/Products.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: 'Products'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: [
    ]
});
export default router