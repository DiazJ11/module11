import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../../views/AboutView.vue'
import QuotesView from '../../views/QuotesView.vue'
import ContactView from '../../views/ContactView.vue'
import NotFound from '../../views/NotFound.vue'

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