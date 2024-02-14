<template>
  <div v-if="user.isAuth" class="sidebar">
    <div class="logo">
      AutoCatcher
    </div>
    <router-link :to="{ name: 'home' }" class="sidebar-link">Главная</router-link>
    <router-link :to="{ name: 'cars' }" class="sidebar-link">Машины</router-link>
    <router-link :to="{ name: 'users' }" class="sidebar-link">Работники</router-link>
    <router-link :to="{ name: 'profile' }" class="user-profile">Аккаунт</router-link>
  </div>
  <div v-if="user.isAuth" class="content-container">
    <div class="content">
      <div class="history-container">
        <button @click="goBack" :class="{ disabled: disabledBack }" :disabled="disabledBack">Назад</button>
        <button @click="goForward" :class="{ disabled: disabledForward }" :disabled="disabledForward">Вперед</button>
      </div>
      <button @click="close" class="close-btn">{{ closeBtnTitle }}</button>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
  <div v-else>
    <Login @authenticated="handleAuthStatus"/>
  </div>
</template>

<script>
import Login from "./components/pages/Login.vue";

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      closeBtnTitle: 'Скрыть',
      arrowLeft: '<=',
      disabledBack: false,
      disabledForward: false,
      user: {
        isAuth: false
      }
    }
  },
  mounted() {
    this.checkHistory()
  },
  methods: {
    close() {
      let node = document.querySelector('.sidebar')
      node.classList.contains('close') ? this.closeBtnTitle = 'Скрыть' : this.closeBtnTitle = 'Раскрыть'
      document.querySelector('.sidebar').classList.toggle('close')
    },
    checkHistory() {
      if (this.$router.options.history.state.back === null) {
        this.disabledBack = true
      } else {
        this.disabledBack = false
      }
      if (this.$router.options.history.state.forward === null) {
        this.disabledForward = true
      } else {
        this.disabledForward = false
      }
    },
    goBack() {
      this.$router.go(-1)
      setTimeout(() => {
        this.checkHistory()
      }, 300)
    },
    goForward() {
      this.$router.go(1)
      setTimeout(() => {
        this.checkHistory()
      }, 300)
    },
    handleAuthStatus(isAuthenticated) {
      if (isAuthenticated) {
        this.user.isAuth = true;
      } else {
        this.user.isAuth = false;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.checkHistory(); // Вызываем метод checkHistory при изменении маршрута
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
