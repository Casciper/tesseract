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

export default {
  name: 'userCreate',
  data() {
    return {
      user: {},
    }
  },
  methods: {
    createUser() {
      axios.post('http://localhost:1031/api/create-user', this.user)
          .then(res => {
            console.log(res)
            this.$router.push({ name: 'users'})
          })
    }
  }
}
</script>

<style scoped>

</style>
