import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import bulma from 'bulma'
import VCalendar from 'v-calendar'

createApp(App).use(router, VCalendar, {}).mount('#app')
