<script>
import { mapState } from 'vuex'
import formatDate from '@/components/formatDate.vue'

export default {
  name: 'RaceTable',
  components: {
    formatDate
  },
  props: ['item'],
  computed: {
    ...mapState(['f1data', 'viewOptions'])
  },
  data () {
    return {
      showAllResults: false
    }
  },
  methods: {
    flagImgPath (nation) {
      return '/images/nation-flags/' + nation.replace(' ', '') + '.svg'
    }
  }
}
</script>

<template>
  <section class="race-table">
    <header>
      <h2>{{ item.raceName }}</h2>
      <h3><a :href="item.Circuit.url" target="_blank">{{ item.Circuit.circuitName }}</a></h3>
      <small>Round {{ item.round }} • {{ item.Circuit.Location.locality }}, {{ item.Circuit.Location.country }} • <formatDate :date="item.date" /> • <a :href="item.url" target="_blank">Read on Wikipedia</a></small>
    </header>

    <div class="chart-wrap">
      <table v-bind:class="{ 'show-all': showAllResults }" class="chart">
        <thead>
          <tr>
            <th class="th-pos">
              Pos
            </th>
            <th>Driver</th>
            <th>Grid</th>
            <th>No.</th>
            <th>Car</th>
            <th>Fastest Lap</th>
            <th>Laps</th>
            <th>Time</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in item.Results" :key="car.index" class="row-position">
            <td class="td-position">
              {{ car.positionText }}
            </td>
            <td class="td-driver">
              <a :href="car.Driver.url" target="_blank">{{ car.Driver.givenName }} {{ car.Driver.familyName }}</a>
              <img :src="flagImgPath(car.Driver.nationality)" :alt="car.Driver.nationality" class="nation-flag">
            </td>
            <td class="td-grid">
              <span class="mobile-only">Started: </span> {{ car.grid }}
            </td>
            <td class="td-car-number">
              {{ car.number }}
            </td>
            <td class="td-constructor">
              <a :href="car.Constructor.url" target="_blank">{{ car.Constructor.name }}</a>
              <img :src="flagImgPath(car.Constructor.nationality)" :alt="car.Constructor.nationality" class="nation-flag">
            </td>
            <td class="td-fastest-lap">
              <span class="mobile-only">Fastest Lap:</span> {{ car.FastestLap ? car.FastestLap.Time.time : '' }}
            </td>
            <td class="td-laps">
              <span class="mobile-only">Laps:</span> {{ car.laps }}
            </td>
            <td class="td-time">
              <span class="mobile-only">Time:</span> {{ car.Time ? car.Time.time : '' }}
            </td>
            <td class="td-points">
              {{ car.points }} <span class="mobile-only">Pts</span>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="showAllResults == false">
          <tr>
            <td colspan="9">
              <button @click="showAllResults = true" class="reveal-btn">
                Show Entire Results
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>
