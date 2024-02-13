<template>
  <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'characters' }">Characters</router-link>
  <router-link :to="{ name: 'news' }">News</router-link>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>

</style>
