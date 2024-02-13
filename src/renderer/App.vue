<template>
  <div class="sidebar">
    <div class="logo">
      AutoCatcher
    </div>
    <router-link :to="{ name: 'home' }" class="sidebar-link">Главная</router-link>
    <router-link :to="{ name: 'cars' }" class="sidebar-link">Машины</router-link>
    <router-link :to="{ name: 'user' }" class="sidebar-link">Профиль</router-link>
  </div>
  <div class="content">
    <span @click="close" class="close-btn">123</span>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    close() {
      document.querySelector('.sidebar').classList.toggle('close')
    }
  }
}
</script>

<style lang="scss">
@import "../styles/app.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
