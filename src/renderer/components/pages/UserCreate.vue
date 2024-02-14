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
  name: 'userCreate',
  data() {
    return {
      user: {},
    }
  },
}
</script>

<style scoped>

</style>
