<script>

import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col-12">
        <div class="container g-0 cards-container mx-0 d-flex flex-wrap">
            <div class="card card-projects" v-for="project in store.projects" :key="project.id">
                <div class="card-image-top position-relative">
                    <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'"
                        :alt="project.title">
                    <div class="position-absolute hover-img"></div>
                </div>
                <div class="card-body">
                    <div class="card-title">
                        <h5>{{ project.title }}</h5>
                        <p>{{ project.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards-container {

    gap: 1rem;

    .card-projects {
        width: calc(100% / 4 - 1rem);
        background-color: #8189d8;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

        img {
            width: 100%;
            height: 200px;
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
    }
}
</style>