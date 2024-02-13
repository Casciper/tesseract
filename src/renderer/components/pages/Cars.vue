<template>
  <div>
    <h1>Список машин</h1>
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
      <tr v-for="car in cars" :key="car.id" :class="!car.saved ? 'new' : ''">
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
          <div v-if="!car.saved">
            <a href="#">Заполнить</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      cars: [
        {
          id: 1,
          date: '28-03-2022',
          time: '23:00',
          number: 'z768axc',
          saved: false
        },
        {
          id: 2,
          date: '28-03-2022',
          time: '23:00',
          number: 'z768axc',
          saved: false
        },
        {
          id: 3,
          date: '28-03-2022',
          time: '23:00',
          number: 'z768axc',
          saved: true
        },
        {
          id: 4,
          date: '28-03-2022',
          time: '23:00',
          number: 'z768axc',
          saved: true
        },
        {
          id: 5,
          date: '28-03-2022',
          time: '23:00',
          number: 'z768axc',
          saved: true
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
