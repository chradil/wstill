import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



let myVue = createApp(App)
myVue.use(router, VCalendar, {}).mount('#app')
