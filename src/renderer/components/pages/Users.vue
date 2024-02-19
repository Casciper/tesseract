<template>
  <div style="display: flex; align-items: center; justify-content: space-between">
    <h1>Список работников</h1>
    <router-link :to="{ name: 'user-create' }">Создать</router-link>
  </div>

  <div class="table-container" v-if="users && users.length > 0">
    <table class="table">
      <thead>
      <tr>
        <th>
          <div>
            ID
          </div>
        </th>
        <th>
          <div>
            Имя
          </div>
        </th>
        <th>
          <div>
            Почта
          </div>
        </th>
        <th>
          <div>
            Роль
          </div>
        </th>
        <th>
          <div>
            Дата создания
          </div>
        </th>
        <th>
          <div>
          </div>
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>
          <div>
            {{ user.id }}
          </div>
        </td>
        <td>
          <div>
            {{ user.name }}
          </div>
        </td>
        <td>
          <div>
            {{ user.email }}
          </div>
        </td>
        <td>
          <div>
            {{ user.role }}
          </div>
        </td>
        <td>
          <div>
            {{ user.created_at }}
          </div>
        </td>
        <td>
          <div>
            <router-link @click="storeUser(user.id)" :to="{ name: 'user-edit', params: { id: user.id }}">Редактировать</router-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    Список работников пуст
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Users',
  data() {
    return {
      users: {}
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios.get('http://localhost:1031/api/get-users')
          .then(res => {
            this.users = res.data.users
          })
    },
    storeUser(id) {
      this.$store.state.storedUser = this.users.find(user => user.id === id);
    }
  }
}
</script>

<style scoped>

</style>
