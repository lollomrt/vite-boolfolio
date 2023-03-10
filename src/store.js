import { reactive } from 'vue';

export const store = reactive({
    projects: [],
    loading: true,
    baseUrl: 'http://127.0.0.1:8000'
})