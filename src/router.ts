import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('./components/WelcomeView.vue'),
  },
  {
    path: '/configuratorcopy',
    component: () => import('./components/ConfiguratorView copy.vue'),
  },
  {
    path: '/step-2',
    component: () => import('./components/Step2View.vue'),
  },
  {
    path: '/step-3',
    component: () => import('./components/Step3View.vue'),
  },
  {
    path  : '/thanks',
    component: () => import('./components/ThanksView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router