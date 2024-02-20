<template>
  <div style="display: flex; align-items: center; justify-content: space-between">
    <h1>Список работников</h1>
    <router-link :to="{ name: 'user-create' }">Создать</router-link>
  </div>
  <div class="table-container">
    <transition name="fade" mode="out-in">
      <div v-if="loading" class="loader content-side">
        <div class="item"></div>
      </div>
    </transition>
    <table class="table">
      <thead v-if="users && users.length > 0">
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

      <tbody v-if="users && users.length > 0">
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
            <router-link @click="storeUser(user.id)" :to="{ name: 'user-edit', params: { id: user.id }}">Редактировать
            </router-link>
          </div>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
        Список работников пуст
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {requestUrl} from "../../store/actions";

export default {
  name: 'Users',
  data() {
    return {
      users: {},
      loading: true,
    }
  },
  mounted() {
    console.log(this.users)
    this.getUsers()
  },
  methods: {
    getUsers() {

      axios.get(`${requestUrl}/api/get-users`)
          .then(res => {
            this.users = res.data.users
          })
          .finally(() => {
            this.loading = false
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
