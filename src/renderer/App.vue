<template>
  <transition name="fade" mode="out-in">
    <div class="notification" v-if="notification.text" :class="notification.type">{{ notification.text }}</div>
  </transition>
  <transition name="fade" mode="out-in">
    <div class="loader main-loader" v-if="loading"><div class="item"></div></div>
  </transition>
  <div v-if="isAuthenticated" class="sidebar">
    <div class="logo">
      AutoCatcher
    </div>
    <router-link :to="{ name: 'home' }" class="sidebar-link">Главная</router-link>
    <router-link :to="{ name: 'cars' }" class="sidebar-link">Машины</router-link>
    <router-link :to="{ name: 'users' }" class="sidebar-link">Работники</router-link>
    <router-link :to="{ name: 'profile' }" class="user-profile">Аккаунт</router-link>
  </div>
  <div v-if="isAuthenticated" class="content-container">
    <div class="content">
      <div class="history-container">
        <div class="history">
          <button @click="goBack" :class="{ disabled: disabledBack }" :disabled="disabledBack">Назад</button>
          <button @click="goForward" :class="{ disabled: disabledForward }" :disabled="disabledForward">Вперед</button>
        </div>
        <div class="logout">
          <button @click="logout" class="close-btn">Выйти</button>
        </div>
      </div>
      <button @click="close" class="close-btn">{{ closeBtnTitle }}</button>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name" style="height: 100%">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
  <div v-else>
    <Login/>
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
    }
  },
  mounted() {
    this.checkHistory()
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    loading() {
      return this.$store.state.loading
    },
    notification() {
      console.log(this.$store.state.notification)
      return this.$store.state.notification
    }
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
    logout() {
      this.$store.dispatch('logout')
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
