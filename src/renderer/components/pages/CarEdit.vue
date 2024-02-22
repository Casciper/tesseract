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
    <div>
    </div>
    <label>
      <span>Марка</span>
      <multiselect ref="multiselect" :hide-selected="true" :closeOnSelect="true" :disabled="!car.isSaved" v-model="car.brand" label="name"
                   track-by="id"
                   :options="brands" :multiple="false" @select="close"></multiselect>
      <span class="input-error-text">{{ v$ && v$.car.brand.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Услуга</span>
      <multiselect :disabled="!car.is_saved" :hide-selected="true" v-model="car.service" tag-placeholder="Add this as new tag"
                   placeholder="Search or add a tag" label="name" track-by="id" :options="services"
                   :multiple="true"></multiselect>
      <span class="input-error-text">{{ v$ && v$.car.service.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Скидка</span>
      <input :disabled="!car.is_saved" required v-model="car.salary"/>
      <span class="input-error-text">{{ v$ && v$.car.salary.$errors[0]?.$message }}</span>
    </label>
    <label>
      <span>Оплата</span>
      <input :disabled="!car.is_saved" required v-model="car.payment"/>
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
import {requestUrl} from '../../store/actions';
import {useVuelidate} from '@vuelidate/core';
import {numeric, required} from '@vuelidate/validators';

export default {
  name: 'CarsEdit',
  data() {
    return {
      v$: useVuelidate(),
      services: [
        {name: 'Мойка', id: 1},
        {name: 'Чистка', id: 2},
        {name: 'Сушка', id: 3}
      ],
      brands: [
        {name: 'Audi', id: 1},
        {name: 'BMW', id: 2},
        {name: 'Toyota', id: 3}
      ],
    }
  },
  computed: {
    car() {
      return this.$store.state.storedCar
    }
  },
  methods: {
    close() {
      setTimeout(() => {
        this.$refs.multiselect.deactivate()
      }, 10)
    },
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
  }
  ,
  validations: {
    car: {
      brand: {
        required
      }
      ,
      service: {
        required
      }
      ,
      salary: {
        required
      }
      ,
      payment: {
        numeric, required
      }
      ,
    }
  }
  ,
}
</script>

<style scoped>

</style>
