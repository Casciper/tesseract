<template>
  <div>
    <h1>Настройки профиля</h1>
  </div>
  <div class="table-container">
    <transition name="fade" mode="out-in">
      <div v-if="loading" class="loader content-side">
        <div class="item"></div>
      </div>
    </transition>

    <form>
      <label>
        <span>Имя</span>
        <input required v-model="user.name"/>
      </label>
      <label>
        <span>Почта</span>
        <input required v-model="user.email"/>
      </label>
      <label>
        <span>Роль</span>
        <input required v-model="user.role" />
      </label>
      <button @click.prevent="updateUser">Сохранить</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {requestUrl} from "../../store/actions";

export default {
  name: 'Profile',
  data() {
    return {
      user: {},
      loading: true
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      axios.get(`${requestUrl}/api/get-user`)
          .then(res => {
            this.user = res.data
          })
          .finally(() => {
            this.loading = false
          })
    },
    updateUser() {
      axios.post(`${requestUrl}/api/update-user`, this.user)
          .then(res => {
            this.$router.push({ name: 'profile'})
            this.$store.commit('setNotification', {text: 'Личные данные обновлены', type: 'success'})
            this.$store.dispatch('clearNotification')
          })
    },
  }
}
</script>

<style scoped>

</style>
