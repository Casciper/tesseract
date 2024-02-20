<template>
  <form>
    <div>
      <h1>Создание пользователя</h1>
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
      <span>Пароль</span>
      <input required v-model="user.password" />
    </label>
    <label>
      <span>Роль</span>
      <input required v-model="user.role" />
    </label>
    <button @click.prevent="createUser">Сохранить</button>
  </form>
</template>

<script>
import axios from "axios";
import {requestUrl} from "../../store/actions";

export default {
  name: 'userCreate',
  data() {
    return {
      user: {},
    }
  },
  methods: {
    createUser() {
      axios.post(`${requestUrl}/api/create-user`, this.user)
          .then(res => {
            this.$router.push({ name: 'users'})
            this.$store.commit('setNotification', {text: 'Работник создан', type: 'success'})
            this.$store.dispatch('clearNotification')
          })
    }
  }
}
</script>

<style scoped>

</style>
