import { createRouter, createWebHistory } from 'vue-router'

// Define application routes
const routes = [
  {
    path: '/',
    component: () => import('./components/WelcomeView.vue'),
  },
  {
    path: '/configurator',
    component: () => import('./components/ConfiguratorView.vue'),
  },
  {
    path: '/configurator/:step',
    component: () => import('./components/ConfiguratorView.vue'),
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