import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Map from "../views/map.vue";
import Calendar from "../views/calendar.vue";
import Event from "../views/event.vue";

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Mappy',
    component: Map
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
    {
    path: '/event/:slug',
    name: 'Event',
    component: Event
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
