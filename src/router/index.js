import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/pages/MainPage.vue';

const routes = [
    {   
        path: '/',
        name: 'main',
        component: MainPage
    },
    {   
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/ProfilePage.vue'),
        meta: {
            title: 'Profile'
        }
    },
    {   
        path: '/favorites',
        name: 'favorites',
        component: () => import('@/pages/FavoritesPage.vue'),
        meta: {
            title: 'Favorites'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
    to.meta.title ? document.title = `${to.meta.title}` : document.title = `Sneakers store`;
})

export default router