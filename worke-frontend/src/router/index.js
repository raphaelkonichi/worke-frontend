import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingMobile from '../views/LandingMobile.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'landing',
    component: LandingMobile
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router