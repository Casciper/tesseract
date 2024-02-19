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
      axios.post('http://localhost:1031/api/update-user', this.user)
          .then(res => {
            console.log(res)
            this.$router.push({ name: 'users'})
          })
    },
    removeUser() {
      axios.post('http://localhost:1031/api/remove-user', this.user)
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
