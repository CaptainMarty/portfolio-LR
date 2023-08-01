import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram, faYoutube, faApple, faAndroid)

import App from './App.vue'
import Index from './pages/index.vue'
import Explorateur from './pages/explorateur.vue'
import Projets from './pages/projets.vue'
import Contact from './pages/contact.vue'
import Competences from './pages/competences.vue'


const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/explorateur', component: Explorateur },
    { path: '/projets', component: Projets },
    { path: '/contact', component: Contact },
    { path: '/competences', component: Competences }
  ]


const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')