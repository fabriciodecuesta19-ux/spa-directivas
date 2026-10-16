import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VKeyView from '../views/VKeyView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/v-if', name: 'vif', component: VIfView },
    { path: '/v-show', name: 'vshow', component: VShowView },
    { path: '/v-for', name: 'vfor', component: VForView },
    { path: '/v-bind-key', name: 'vkey', component: VKeyView }
  ]
})

export default router