<template>
  <form>
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
      car: {
        id: 2,
        date: '28-03-2022',
        time: '23:00',
        number: 'z768axc',
        saved: false
      },
    }
  },
}
</script>

<style scoped>

</style>
