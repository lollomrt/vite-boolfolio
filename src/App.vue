<script>

// import ProjectMain from './components/ProjectMain.vue';
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss">
p {
  margin-bottom: 0;
}

.page-link {
  background-color: #a8c0ff;
  color: #3f2b96;
  border: 1px solid #3f2b96;
}

.card-title {
  margin: 0;
}
</style>
