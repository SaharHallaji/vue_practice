import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FocusGame from "../views/FocusGame.vue";
import BindingPractice from "../views/BindingPractice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/focus_game',
      name: 'Focus Game',
      component: FocusGame
    },
    {
      path: '/binding_practice',
      name: 'Binding Practice',
      component: BindingPractice
    },
  ]
})

export default router
