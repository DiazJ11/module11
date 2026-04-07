import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../Views/AboutView.vue'
import QuotesView from '../Views/QuotesView.vue'
import ContactView from '../Views/ContactView.vue'
import NotFound from '../Views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutView },
  { path: '/quotes', component: QuotesView },
  { path: '/contact', component: ContactView },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router