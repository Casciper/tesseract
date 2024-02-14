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
    <label>
      <span>Дата создания</span>
      <input required v-model="user.date" />
    </label>
    <button>Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'userEdit',
  data() {
    return {
      user: {
        id: 1,
        name: 'Иван',
        email: '2zKpR@example.com',
        role: 'admin',
        date: '28-03-2022 23:00',
      },
    }
  },
}
</script>

<style scoped>

</style>
