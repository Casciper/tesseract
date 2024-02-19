<template>
  <main class="main">
    <div class="container">
      <section class="wrapper">
        <div class="heading">
          <h1 class="text text-large">AutoCatcher</h1>
        </div>
        <form name="signin" class="form">
          <div class="input-control">
            <input @keydown.enter="login" v-model="user.email" type="email" name="email" id="email" class="input-field" :class="{ 'input-error': v$ && v$.user.email.$error }" placeholder="Введите почту">
<!--            <span class="input-error-text">{{ v$ && v$.user.email.$errors[0]?.$message }}</span>-->
          </div>
          <div class="input-control">
            <input @keydown.enter="login" v-model="user.password" type="password" name="password" id="password" class="input-field" :class="{ 'input-error': v$ && v$.user.password.$error }" placeholder="Введите пароль">
<!--            <span class="input-error-text">{{ v$ && v$.user.password.$errors[0]?.$message }}</span>-->
          </div>
          <div class="input-control">
            <input @click="login" type="button" name="submit" class="input-submit" value="Войти">
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import {useVuelidate} from '@vuelidate/core';
import {required, email, minLength} from '@vuelidate/validators';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      v$: useVuelidate(),
    }
  },
  methods: {
    login() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        this.$store.dispatch('login', { email: this.user.email, password: this.user.password });
      }
    },
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    }
  },
}
</script>

<style scoped>

</style>
