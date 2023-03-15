<script>

// import axios from 'axios';
// import SingleProject from './SingleCard.vue';
// import { store } from '../store.js'

export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'homepage'
                },
                {
                    label: 'Progetti',
                    routeName: 'projects'
                },
                {
                    label: 'Contact Us',
                    routeName: 'contacts'
                },
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="container-fluid h-100">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-6 p-0 m-0">
                        <img src="/img/logo.png" alt="boolfolio-logo">
                    </div>
                    <div class="col-6 h-100 p-0 m-0">
                        <nav class="navbar navbar-expand-md justify-content-end h-100 m-0 p-0">
                            <ul class="navbar-nav mr-auto h-100">
                                <li class="nav-item h-100" v-for="(item, index) in menuItems" :key="index">
                                    <router-link :to="{ name: item.routeName }"
                                        class="nav-link h-100 d-flex align-items-center">
                                        <span class="label">{{ item.label }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: #fff;
    height: 75px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
    }

    .label {
        color: #5f4abd;
        transition: 0.3s;
    }

    li {
        border-top: 4px solid #fff;
        border-bottom: 4px solid #fff;
        transition: 0.3s;

        &:hover {
            border-bottom: 4px solid #8189d8;
        }

        &:hover .label {
            color: #8189d8;
            transform: translate(0, 5px);
        }
    }

    img {
        width: 200px;
        filter: brightness(1) saturate(100%) invert(1) sepia(48%) saturate(1917%) hue-rotate(1350deg) brightness(54%) contrast(91%);
    }
}
</style>