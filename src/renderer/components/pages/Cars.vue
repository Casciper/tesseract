<template>
  <div>
    <h1>Список машин</h1>
  </div>

  <div class="table-container" v-if="cars">
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
            Дата
          </div>
        </th>
        <th>
          <div>
            Время
          </div>
        </th>
        <th>
          <div>
            Номер
          </div>
        </th>
        <th>
          <div>
          </div>
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="car in cars" :key="car.id" :class="!car.isSaved ? 'new' : ''">
        <td>
          <div>
            {{ car.id }}
          </div>
        </td>
        <td>
          <div>
            {{ car.date }}
          </div>
        </td>
        <td>
          <div>
            {{ car.time }}
          </div>
        </td>
        <td>
          <div>
            {{ car.number }}
          </div>
        </td>
        <td>
          <div>
            <router-link @click="storeCar(car.id)" :to="{ name: 'car-edit', params: { id: car.id}}">{{ car.isSaved ? 'Посмотреть' : 'Заполнить'}}</router-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Cars',
  data() {
    return {
      cars: null,
    }
  },
  mounted() {
    this.getCars()
  },
  methods: {
    getCars() {
      axios.get('http://localhost:1031/api/get-cars')
        .then(response => {
          this.cars = response.data.cars
        })
    },
    storeCar(id) {
      this.$store.state.storedCar = this.cars.find(car => car.id === id);
    }
  },
}
</script>

<style scoped>

</style>
