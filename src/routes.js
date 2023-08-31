import HomeView from './components/HomeView.vue'
import signUp  from './components/SignUp.vue'
import LoginView from './components/LoginView.vue'
import AddRestroView from './components/AddRestroView.vue'
import PageNotFound from './components/PageNotFound.vue'
import UpdateRestroView from './components/UpdateRestroView.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes =[
    {
        name:'HomeView',
        component:HomeView,
        path:'/'
    },
    {
        name:'signUp',
        component:signUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:LoginView,
        path:'/login'
    },
    {
        name:'AddRestroView',
        component:AddRestroView,
        path:'/add'
    },
    {
        name:'UpdateRestroView',
        component:UpdateRestroView,
        path:'/update/:id'
    },
    {
        name:'PageNotFound',
        component:PageNotFound,
        path:'/:catchAll(.*)'
    }
   
]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router