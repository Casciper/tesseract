<template>
  <div style="display: flex; align-items: center; justify-content: space-between">
    <h1>Список работников</h1>
    <router-link :to="{ name: 'user-create' }">Создать</router-link>
  </div>

  <div class="table-container">
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
            {{ user.date }}
          </div>
        </td>
        <td>
          <div>
            <router-link :to="{ name: 'user-edit', params: { id: user.id }}">Редактировать</router-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Иван',
          email: '2zKpR@example.com',
          role: 'admin',
          date: '28-03-2022 23:00',
        },
        {
          id: 2,
          name: 'Иван',
          email: '2zKpR@example.com',
          role: 'admin',
          date: '28-03-2022 23:00',
        },
        {
          id: 3,
          name: 'Иван',
          email: '2zKpR@example.com',
          role: 'admin',
          date: '28-03-2022 23:00',
        },
        {
          id: 4,
          name: 'Иван',
          email: '2zKpR@example.com',
          role: 'admin',
          date: '28-03-2022 23:00',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
