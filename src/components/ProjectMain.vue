<script>
export default {
    data() {
        return {
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/project`).then((response) => {
                if (response.data.success) {
                    this.projects = response.data.results
                    this.loading = false;
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
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Lista dei progetti</h1>
                </div>
                <div class="col-12">
                    lista
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>