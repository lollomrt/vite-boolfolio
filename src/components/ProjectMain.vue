<script>

import axios from 'axios';
import SingleProject from './SingleCard.vue';
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },
    components: {
        SingleProject
    },
    methods: {
        getProjects() {
            store.loading = true;
            axios.get(`${store.baseUrl}/api/project`).then((response) => {
                if (response.data.success) {
                    store.projects = response.data.results
                    store.loading = false;
                }
                else {
                    //messaggio di errore
                }
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="position-relative container-fluid m-0 p-0">
        <div v-if="store.loading"
            class="container-fluid m-0 p-0 loader-container d-flex align-items-center justify-content-center position-absolute">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div v-else class="container-fluid bg-fancy">
            <div class="container">
                <div class="row">
                    <div class="col-12 py-5">
                        <h2>Lista dei progetti</h2>
                    </div>
                    <div class="col-12">
                        <div class="container g-0 cards-container mx-0 d-flex flex-wrap">
                            <SingleProject />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-fancy {
    background-color: #3f2b96;
}

.loader-container {
    height: 100vh;
    width: 100vw;
    z-index: 10;
    background: #a8c0ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}
</style>