import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '../views/Layout/DashboardLayout.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
