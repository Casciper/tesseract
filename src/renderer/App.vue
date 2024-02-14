<template>
  <div class="sidebar">
    <div class="logo">
      AutoCatcher
    </div>
    <router-link :to="{ name: 'home' }" class="sidebar-link">Главная</router-link>
    <router-link :to="{ name: 'cars' }" class="sidebar-link">Машины</router-link>
    <router-link :to="{ name: 'users' }" class="sidebar-link">Менеджеры</router-link>
    <router-link :to="{ name: 'profile' }" class="user-profile">Аккаунт</router-link>
  </div>
  <div class="content-container">
    <div class="content">
      <div class="history-container">
        <span @click="" class="history-btn">{{ arrowLeft }}</span>
        <span @click="" class="history-btn">{{ arrowRight }}</span>
      </div>
      <span @click="close" class="close-btn">{{ arrowLeft }}</span>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arrowLeft: '<=',
      arrowRight: '=>',
    }
  },
  methods: {
    close() {
      let node = document.querySelector('.sidebar')
      node.classList.contains('close') ? this.closeBtnTitle = '<=' : this.closeBtnTitle = '=>'
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
