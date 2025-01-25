import { createRouter, createWebHistory } from 'vue-router';  // Import directly
import Test from './Test.vue';
import Home from './Home.vue';
import Foo from './Foo.vue';
import Profile from './NestedRoutes/Profile.vue';
import Settings from './NestedRoutes/Settings.vue';
import Dashboard from './NestedRoutes/Dashboard.vue';

const routes = [
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/foo/:id',
        name: 'Foo',
        component: Foo,
        props: true,  // Pass the dynamic parameter as a prop to the component
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: Profile
            },
            {
                path: 'settings',
                name: 'Settings',
                component: Settings
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
