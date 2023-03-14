<script>

import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            project: [],
            loading: true
        }
    },
    mounted() {
        this.loading = true;
        axios.get(`${store.baseUrl}/api/project/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.project = response.data.project
                this.loading = false;
            }
            else {
                //redirect pagina 404
                this.$router.push({ name: 'not-found' })
            }
        })
    }
}
</script>

<template>
    <div class="position-relative container-fluid m-0 p-0 mh-100">
        <div v-if="loading"
            class="container-fluid m-0 p-0 loader-container d-flex align-items-center justify-content-center position-absolute">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div v-else class="container-fluid bg-fancy d-flex flex-column align-items-center justify-content-center">
            <div class="container">
                <div class="row rounded">
                    <div class="col-6 my-5 p-5 back-title d-flex flex-column justify-content-between">
                        <div class="top">
                            <h2>{{ project.title }}</h2>
                            <hr class="separator">
                            <p class="text-white">{{ project.content }}</p>
                        </div>
                        <div class="container-info">
                            <div class="card-body d-flex align-items-center tags px-0">
                                <span class="me-1 title"><strong>Tag: </strong></span>
                                <span v-if="project.technologies !== null" class="d-flex flex-wrap gap-1 flex-row">
                                    <span v-for="tec in project.technologies" class="badge-custom d-flex">{{ tec.name
                                    }}</span>
                                </span>
                                <span v-else class="d-flex flex-wrap gap-1 flex-row">
                                    <span>Non disponibile</span>
                                </span>
                            </div>
                            <p><strong>Categoria: </strong>{{ project.category == null ? 'non disponibile' :
                                project.category.title }}</p>
                        </div>
                    </div>
                    <div class="col-6 my-5 p-0 position-relative">
                        <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'"
                            :alt="project.title">
                        <div v-if="project.cover_image === null" class="position-absolute hover-img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
mh-100 {
    min-height: 100vh;
}

.bg-fancy {
    background: #a8c0ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: calc(100vh - 75px);

}

.rounded {
    border-radius: 15px;
}

.tags {
    font-size: 12px;
    padding: 1rem 0;

    .title {
        font-size: 16px;
    }
}

.badge-custom {
    background-color: #a8c0ff;
    color: #3f2b96;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 0.5rem;
    border-radius: 0.2rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hover-img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #8189d8;
    mix-blend-mode: multiply;
}

.back-title {
    background-color: #8189d8;
    color: #3f2b96;

    .separator {
        width: 20%;
        border-top: 10px solid #a8c0ff;
    }
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

.pagination>li>.disabled {
    background-color: red !Important;
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