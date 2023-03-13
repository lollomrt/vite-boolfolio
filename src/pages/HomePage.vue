<script>

// import axios from 'axios';
// import SingleProject from './SingleCard.vue';
// import { store } from '../store.js'

export default {

}
</script>

<template>
    <div class="container-fluid m-0 p-0">
        <div class="container-fluid bg-fancy d-flex flex-column align-items-center">
            <div class="container h-100vh">
                <div class="row col-12 my-5 p-3 contenitore-trash d-flex align-items-center">
                    <div class="col-4">
                        <div class="">
                            <img class="img-lollo" src="src\assets\img\foto-lorenzo.png" alt="">
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="">
                            <h4>Benvenuti nel protfolio di</h4>
                            <h1>Lorenzo Martini</h1>
                            <p>SI, questa pagina è volutamente trash!!!</p>
                        </div>
                    </div>
                </div>
                <div class="row col-12 my-5 p-3 contenitore-trash-2 d-flex">
                    <div class="col-12">
                        <div class="">
                            <h3>Questo è solo uno spocchioso test di funzionamento Laravel + VueJs con la funzione router
                                per cambiare pagine (che figata!!) ma non solo!</h3>
                            <p>Abbiamo anche il loader che si mostra fino a quando l'api non ha restituito tutti i dati
                                richiesti!. La verità però è una sola: se sto perdendo tempo a scrivere questo genere di
                                cavolate probabilmente dovrei uscire di più!<br><strong>P.S. Bootstrap non mi
                                    piace.</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.h-100vh {
    min-height: 100vh;
}

.bg-fancy {
    background: #a8c0ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.contenitore-trash {
    background-color: #3f2b96;
    border-radius: 10px;
}

.contenitore-trash-2 {
    background-color: #a8c0ff;
    border-radius: 10px;
}

.img-lollo {
    width: 100%;
}
</style>