<script>
import { mapState, mapActions } from 'vuex'
import raceTable from '@/components/raceTable.vue'
import formatDate from '@/components/formatDate.vue'

export default {

  name: 'Raceresult',
  components: {
    raceTable,
    formatDate
  },
  props: ['item'],
  computed: mapState([
    'f1data',
    'viewOptions'
  ]),
  data () {
    return {
      showAllResults: false,
      sortNewestFirst: false,
      round: 0
    }
  },
  updated () {
    // this.viewOptions.loading = false
  },
  methods: {
    ...mapActions([ 'reverseSort' ]),

    raceSelect (roundID) {
      this.round = roundID

      if (window.innerWidth < 1400) {
        document.querySelector('.race-table').scrollIntoView({ behavior: 'smooth' })
      }
    },

    selectedRound (roundID) {
      const selected = (roundID == this.round) ? 'selected-round' : ''
      return selected
    }

  }

}

</script>

<template>
  <section v-if="f1data.races.length > 0" class="race-grid">
    <nav class="race-select-col">
      <ul>
        <li v-for="(item, index) in f1data.races" :key="item.date" :class="selectedRound(index)">
          <button @click="raceSelect(index)" class="race-select-button">
            <strong>{{ item.raceName }}</strong><br><formatDate :date="item.date" />
          </button>
        </li>
      </ul>
    </nav>
    <raceTable :item="f1data.races[round]" />
  </section>
  <section v-else>
    <p class="message">No race data avalible. The season may not have started yet.</p>
  </section>
</template>
