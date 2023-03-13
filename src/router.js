//1 - importare questi metodi dal pacchetto vue router
import { createRouter, createWebHistory } from 'vue-router';

//2 - Importare le componenti delle pagine
import HomePage from './pages/HomePage.vue';
import ProjectMain from './components/ProjectMain.vue'

//3 - Creare l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectMain
        }
    ]
})

//4 - Non dimenticare di esportare il router, sennò non lo utilizzeremo mai
export { router }

//5 - Andare nel main.js per scrivere di utilizzare router.js