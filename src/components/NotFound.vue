<script>

export default {

}
</script>

<template>
    <div class="container-fluid m-0 p-0 mh-100">
        <div class="container-fluid bg-fancy d-flex flex-column align-items-center justify-content-center">
            <h2 class="error404">404</h2>
            <h3>pagina non trovata</h3>
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

    color: #a8c0ff;

    .error404 {
        font-size: 20vh;
        font-weight: bold;
    }

    h3 {
        text-transform: uppercase;
        font-weight: bold
    }

}
</style>