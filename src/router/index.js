import {createRouter, createWebHistory} from 'vue-router'
import Products from '../views.vue/Products.vue'

const routes = [
    {
        path: '/',
        name: 'Products',
        component: 'Products'
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    ]
})
export default router