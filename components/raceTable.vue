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
    ...mapState([ 'f1data', 'viewOptions' ])
  },
  data () {
    return {
      showAllResults: false
    }
  },
  methods: {
    gridDiff (car) {
      const gridDiff = (car.grid - car.position)
      return gridDiff
    },
    gridFinishDiff (gridStart, finishPos) {
      const gridDiff = (gridStart - finishPos)

      if (gridDiff > 0) {
        return '⬆︎' + gridDiff
      } else if (gridDiff < 0) {
        return '⬇︎' + Math.abs(gridDiff)
      }
    },
    flagImgPath (nation) {
      return '/images/nation-flags/' + nation.replace(' ', '') + '.svg'
    },
    gridStart (gridStart) {
      if (gridStart == 0) {
        return 'Pits'
      } else {
        return gridStart
      }
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
            <th><span class="hide">Position Change</span></th>
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
          <tr v-for="car in item.Results" :key="car.index">
            <td>{{ car.positionText }}</td>
            <td v-if="gridDiff(car) > 0">
              <span class="grid-change grid-up">{{ gridDiff(car) }}</span>
            </td>
            <td v-if="gridDiff(car) < 0">
              <span class="grid-change grid-down">{{ Math.abs(gridDiff(car)) }}</span>
            </td>
            <td v-if="gridDiff(car) == 0" />
            <td>
              <a :href="car.Driver.url" target="_blank">{{ car.Driver.givenName }} {{ car.Driver.familyName }}</a>
              <img :src="flagImgPath(car.Driver.nationality)" :alt="car.Driver.nationality" class="nation-flag">
            </td>
            <td>{{ gridStart(car.grid) }}</td>
            <td>{{ car.number }}</td>
            <td>
              <a :href="car.Constructor.url" target="_blank">{{ car.Constructor.name }}</a>
              <img :src="flagImgPath(car.Constructor.nationality)" :alt="car.Constructor.nationality" class="nation-flag">
            </td>
            <td>{{ car.FastestLap ? car.FastestLap.Time.time : '' }}</td>
            <td>{{ car.laps }}</td>
            <td>{{ car.Time ? car.Time.time : '' }}</td>
            <td>{{ car.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
