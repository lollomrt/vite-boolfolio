//1 - importare questi metodi dal pacchetto vue router
import { createRouter, createWebHistory } from 'vue-router';

//2 - Importare le componenti delle pagine
import HomePage from './pages/HomePage.vue';
import ProjectMain from './components/ProjectMain.vue'
import SingleProject from './components/SingleProject.vue'
import NotFound from './components/NotFound.vue'

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
        },
        {
            path: '/projects/:slug', //con :nome_parametro andiamo a passare il parametro per visualizzare il dettaglio di quel progetto (coincide con quello dato in api.php in Laravel)
            name: 'single-project',
            component: SingleProject
        },
        // Mettere la 404 SEMPRE per ultima, sennò la trova per prima e non visualizza le altre pagine
        {
            path: '/*', //con :nome_parametro andiamo a passare il parametro per visualizzare il dettaglio di quel progetto (coincide con quello dato in api.php in Laravel)
            name: 'not-found',
            component: NotFound
        }
    ]
})

//4 - Non dimenticare di esportare il router, sennò non lo utilizzeremo mai
export { router }

//5 - Andare nel main.js per scrivere di utilizzare router.js