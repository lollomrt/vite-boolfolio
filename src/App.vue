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
  <div class="main up-76">
    <router-view></router-view>
  </div>
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

.up-75 {
  padding-top: 175px;
  margin-top: 175px;
}
</style>
