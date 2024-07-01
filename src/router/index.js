import { createRouter, createWebHistory } from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Tareas from '../components/Tareas.vue'
import Prueba from '@/views/prueba.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Formulario',
      name: 'form',
      component: Formulario
    },
    {
      path: '/Menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/Tareas',
      name: 'tareas',
      component: Tareas
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: Prueba
    },
  ]
})

router.beforeEach((to, from, next) => {

  const usuario = localStorage.getItem('usuario');
  const contraseña = localStorage.getItem('contraseña');

  if (to.path === '/Menu' && (!usuario || !contraseña)){

    next('/')

  } else {

    next();

  }

})

export default router
