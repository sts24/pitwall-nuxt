<template>
  <section class="standings-data content-container">
    <Driverstandings />

    <ConstructorStandings />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ConstructorStandings from './ConstructorsStandings.vue'
import Driverstandings from './DriversStandings.vue'

export default {
  name: 'Standings',
  components: {
    ConstructorStandings,
    Driverstandings
  },
  computed: mapState(['f1data', 'viewOptions'])
}
</script>
