import {createRouter, createWebHashHistory} from 'vue-router'
import AnimalList from '../views/AnimalList.vue'
import AnimalForm from '../views/AnimalForm.vue'

const routes = [
    {
        path: '/',
        name: 'listado',
        component: AnimalList,
    },
    {
        path: '/animal',
        name: 'animalCreate',
        component: AnimalForm,
    },
    {
        path: '/animal/:id',
        name: 'animalModify',
        component: AnimalForm,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
