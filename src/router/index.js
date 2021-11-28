import Vue from 'vue'
import VueRouter from 'vue-router'
import Item1 from '../views/Item1.vue'
import Item2 from '../views/Item2.vue'
import Item3 from '../views/Item3.vue'
import Item4 from '../views/Item4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Item1',
    name: 'Item1',
    component: Item1
  },
  {
    path: '/Item2',
    name: 'Item2',
    component: Item2
  },
  {
    path: '/Item3',
    name: 'Item3',
    component: Item3
  },
  {
    path: '/Item4',
    name: 'Item4',
    component: Item4
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
