<template>
    <h1>Главная страница</h1>

    <div class="table-container">
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="loader content-side">
          <div class="item"></div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: true
    }
  },
}
</script>

<style scoped>

</style>
