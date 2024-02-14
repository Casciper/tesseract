<template>
  <main class="main">
    <div class="container">
      <section class="wrapper">
        <div class="heading">
          <h1 class="text text-large">AutoCatcher</h1>
        </div>
        <form name="signin" class="form">
          <div class="input-control">
            <input type="email" name="email" id="email" class="input-field" placeholder="Введите почту">
          </div>
          <div class="input-control">
            <input type="password" name="password" id="password" class="input-field" placeholder="Введите пароль">
          </div>
          <div class="input-control">
            <input @click="sendAuthStatus" type="button" name="submit" class="input-submit" value="Войти">
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    sendAuthStatus() {
      console.log(123123)
      this.$emit('authenticated', true); // Передаем значение true родительскому компоненту
    },
  }
}
</script>

<style scoped>

</style>
