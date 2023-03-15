<script>

import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: null
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message
            }

            axios.post(`${store.baseUrl}/api/contacts`, data).then((response) => {
                if (!this.success) {
                    this.errors = response.data.errors
                }
                else {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                }
            });
        }
    }
}
</script>

<template>
    <div class="container-fluid bg-fancy d-flex flex-column justify-content-center">
        <div class="row m-0">
            <div class="col-12">
                <div class="title-container container mb-5 p-3">
                    <h2 class="error404">Contattaci</h2>
                    <p>Se hai domande o proposte compila il form, oppure utilizza uno dei metodi di contatto
                        alternativi. Sarò felice di risponderti entro massimo 48h.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row padding-bottom-5">
                <div class="col-8 ps-0">
                    <div class="form-container p-3">
                        <form action="">
                            <div @submit.prevent="sendForm()" class="row">
                                <div class="col-6">
                                    <label for="nome" class="control-label text-white">Nome</label>
                                    <input type="text" class="form-control" name="nome" id="nome"
                                        placeholder="Inserisci il tuo nome ..." v-model="name">
                                </div>
                                <div class="col-6 ">
                                    <label for="cognome" class="control-label text-white">Cognome</label>
                                    <input type="text" class="form-control" name="cognome" id="cognome"
                                        placeholder="Inserisci il tuo cognome ..." v-model="surname">
                            </div>
                            <div class="col-6 mt-3">
                                <label for="email" class="control-label text-white">Email</label>
                                <input type="mmail" class="form-control" name="email" id="email"
                                    placeholder="Inserisci il tuo indirizzo email ..." v-model="email">
                            </div>
                            <div class="col-6 mt-3">
                                    <label for="telefono" class="control-label text-white">Telefono</label>
                                    <input type="phone" class="form-control" name="telefono" id="telefono"
                                        placeholder="Inserisci il tuo numero di telefono ..." v-model="phone">
                                </div>
                                <div class="col-12 mt-3">
                                    <label for="messaggio" class="control-label text-white">Messaggio</label>
                                    <textarea class="form-control" v-model="message" name="messaggio" id="messaggio"
                                        cols="30" rows="5" placeholder="Inserisci il tuo messaggio ..."></textarea>
                                </div>
                                <div class="col-6 mt-3">
                                    <button type="submit" class="send_email btn w-50 btn-custom">Invia</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-4">
                    <div class="contacts-container">
                        <h3>Altri contatti ed info</h3>
                        <hr class="separator">
                        <div class="contacts-container d-flex flex-column gap-2 py-2">
                            <a href="#"><i class="fa-solid fa-phone me-2"></i><strong>Telefono: </strong><span
                                    class="text-white">333 3333333</span></a>
                            <a href="#"><i class="fa-solid fa-envelope me-2"></i><strong>Email: </strong><span
                                    class="text-white">info@nomedominio.com</span></a>
                        </div>
                        <hr class="separator my-2">
                        <div class="contacts-container d-flex flex-column gap-2 py-2">
                            <a href="#"><i class="fa-solid fa-location-dot me-2"></i><strong>Dove ci troviamo:
                                </strong><span class="text-white">via Quella 5, 03100 Frosinone (FR)</span></a>
                            <a href="#"><i class="fa-solid fa-file-lines me-2"></i><strong>Partita IVA: </strong><span
                                    class="text-white">03084020605</span></a>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-12">
                        <div class="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.7582459319883!2d13.329527915498431!3d41.66096507924004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13255a5c47297dbd%3A0x83973da3129017b3!2sRefrigerio%20-%20Produzione%20ghiaccio%20alimentare!5e0!3m2!1sit!2sit!4v1678891071313!5m2!1sit!2sit"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.padding-bottom-5 {
    padding: 0 0 100px 0;
}

.btn-custom {
    background-color: #3f2b96;
    color: #ffffff;
    text-transform: uppercase;

    &:hover {
        background-color: #5f4abd;
    }
}

.bg-fancy {
    background: #a8c0ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: calc(100vh - 75px);

    color: #a8c0ff;

    padding: 3rem 0;

    .form-container,
    .title-container,
    .contacts-container {
        border-radius: 5px;
    }

    .separator {
        width: 20%;
        border-top: 10px solid #a8c0ff;
    }

    .contacts-container {
        a {
            text-decoration: none;
            color: #a8c0ff;
            transition: 0.3s;
            display: inline-block;

            &:hover {
                color: #fff;
                transform: translate(10px, 0);
            }
        }

    }

    .form-container {
        background-color: #a8c0ff;
    }

    .title-container {
        background-color: #3f2b96;
    }

    .error404 {
        font-weight: bold;
    }

    h3 {
        text-transform: uppercase;
        font-weight: bold
    }

}
</style>