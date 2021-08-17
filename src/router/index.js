import Vue from 'vue'
import VueRouter from 'vue-router'
import ListarReceita from '../views/ListarReceita.vue'
import EditarReceita from '../views/EditarReceita.vue'
import DetalhararReceita from '../views/DetalharReceita.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListarReceita',
    component: ListarReceita
  },
  {
    path: '/editar/:idReceita/:acao',
    name: 'Editar',    
    component: EditarReceita
  },
  {
    path: '/detalhar/:idReceita',
    name: 'Detalhar',    
    component: DetalhararReceita
  }
]

const router = new VueRouter({
  routes
})

export default router
