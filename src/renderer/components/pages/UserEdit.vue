<template>
  <form>
    <div>
      <h1>Редактировать пользователя</h1>
    </div>
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
    <button @click.prevent="removeUser">Удалить</button>
  </form>
</template>

<script>
import axios from "axios";
import {requestUrl} from "../../store/actions";

export default {
  name: 'userEdit',
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.state.storedUser
    }
  },
  methods: {
    updateUser() {
      axios.post(`${requestUrl}/api/update-user`, this.user)
          .then(res => {
            this.$router.push({ name: 'users'})
            this.$store.commit('setNotification', {text: 'Работник обновлён', type: 'success'})
            this.$store.dispatch('clearNotification')
          })
    },
    removeUser() {
      axios.post(`${requestUrl}/api/remove-user`, this.user)
          .then(res => {
            this.$router.push({ name: 'users'})
            this.$store.commit('setNotification', {text: 'Работник удалён', type: 'success'})
            this.$store.dispatch('clearNotification')
          })
    }
  }
}
</script>

<style scoped>

</style>
