import { createRouter, createWebHistory } from 'vue-router';  // Import directly
import Home from '../LoginLogoutForm/Home.vue';
import Login from '../LoginLogoutForm/Login.vue';
import Profile from '../LoginLogoutForm/Profile.vue';
// import Login from '../Login.vue';
// import Profile from '../Profile.vue';
// import Home from '../Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },

];

const router1 = createRouter({
    history: createWebHistory(),
    routes,
});

export default router1;
