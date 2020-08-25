<script>
import { mapState } from 'vuex'

export default {
  name: 'Driversstandings',
  computed: mapState([
    'f1data',
    'viewOptions'
  ]),
  methods: {
    constructorsList (items) {
      const cList = []
      for (let i = 0; i < items.length; i++) {
        cList[i] = items[i].name
      }
      return cList.join(', ')
    },
    flagImgPath (nation) {
      return '/images/nation-flags/' + nation.replace(' ', '') + '.svg'
    }
  }
}

</script>

<template>
  <section v-if="f1data.driverStandings.length > 0" class="standings-table">
    <header>
      <h2>Driver's Championship</h2>
    </header>

    <div class="chart-wrap">
      <table class="chart show-all">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Points</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in f1data.driverStandings" :key="i.index">
            <td>{{ i.positionText }}</td>
            <td>
              <a :href="i.Driver.url" target="_blank">{{ i.Driver.givenName }} {{ i.Driver.familyName }}</a>
              <img :src="flagImgPath(i.Driver.nationality)" :alt="i.Driver.nationality" class="nation-flag">
            </td>
            <td>{{ constructorsList(i.Constructors) }}</td>
            <td>{{ i.points }}</td>
            <td>{{ i.wins }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

</template>