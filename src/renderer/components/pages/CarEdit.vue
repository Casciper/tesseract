<template>
  <form v-if="car">
    <div>
      <h1>Редактировать машину</h1>
    </div>
    <label>
      <span>Номер</span>
      <input disabled required v-model="car.number"/>
    </label>
    <label>
      <span>Дата</span>
      <input disabled required v-model="car.date"/>
    </label>
    <label>
      <span>Время</span>
      <input disabled required v-model="car.time"/>
    </label>
    <label>
      <span>Марка</span>
      <input :disabled="car.isSaved" required v-model="car.brand"/>
      <span class="input-error-text">{{ v$ && v$.car.brand.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Услуга</span>
      <input :disabled="car.isSaved" required v-model="car.service"/>
      <span class="input-error-text">{{ v$ && v$.car.service.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Скидка</span>
      <input :disabled="car.isSaved" required v-model="car.salary"/>
      <span class="input-error-text">{{ v$ && v$.car.salary.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Оплата</span>
      <input :disabled="car.isSaved" required v-model="car.payment"/>
      <span class="input-error-text">{{ v$ && v$.car.payment.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Коммент</span>
      <textarea required v-model="car.comment"/>
    </label>
    <button @click.prevent="setCar">Сохранить</button>
  </form>
</template>

<script>
import axios from "axios";
import { requestUrl } from '../../store/actions';
import {useVuelidate} from '@vuelidate/core';
import {required} from '@vuelidate/validators';

export default {
  name: 'CarsEdit',
  data() {
    return {
      v$: useVuelidate(),
    }
  },
  computed: {
    car() {
      return this.$store.state.storedCar
    }
  },
  methods: {
    setCar() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        axios.post(`${requestUrl}/api/update-car`, this.car)
            .then(res => {
              this.$router.push({name: 'cars'})
              this.$store.commit('setNotification', {text: 'Заявка обновлена', type: 'success'})
              this.$store.dispatch('clearNotification')
            })
      }
    }
  },
  validations: {
    car: {
      brand: {required},
      service: {required},
      salary: {required},
      payment: {required},
    }
  },
}
</script>

<style scoped>

</style>
