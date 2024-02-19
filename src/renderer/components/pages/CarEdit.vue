<template>
  <form v-if="car">
    <div>
      <h1>Редактировать машину</h1>
    </div>
    <label>
      <span>Номер</span>
      <input required v-model="car.number"/>
    </label>
    <label>
      <span>Дата</span>
      <input required v-model="car.date"/>
    </label>
    <label>
      <span>Время</span>
      <input required v-model="car.time" />
    </label>
    <label>
      <span>Марка</span>
      <input required v-model="car.brand" />
    </label>
    <label>
      <span>Услуга</span>
      <input required v-model="car.service" />
    </label>
    <label>
      <span>Оплата</span>
      <input required v-model="car.price" />
    </label>
    <button>Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'CarsEdit',
  data() {
    return {
      car: {},
    }
  },
  computed: {
    car() {
      return this.$store.state.storedCar
    }
  },
}
</script>

<style scoped>

</style>
