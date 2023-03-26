import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabilidadesPokemon from '../views/HabilidadesPokemon.vue'
import SobrePokemon from '../views/SobrePokemon.vue'
import StatusPokemon from '../views/StatusPokemon.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {path: '/habilidades', component: HabilidadesPokemon},
      {path: 'sobre', component: SobrePokemon},
      {path: 'status', component: StatusPokemon}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
