import { createRouter, createWebHistory } from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Tareas from '../components/Tareas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
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
    }
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
