<template>
  <div id="page">
    <pageHeader />

    <main class="grid-area">
      <nav class="type-select">
        <SeasonSelectMenu />

        <ul class="site-nav">
          <li>
            <button :class="{'selected': viewOptions.selectedTab === 'races'}" v-on:click="setTab('races')" class="site-nav-button">
              Race Results
            </button>
          </li>
          <li>
            <button :class="{'selected': viewOptions.selectedTab === 'drivers'}" v-on:click="setTab('drivers')" class="site-nav-button">
              Driver's Championship
            </button>
          </li>
          <li>
            <button :class="{'selected': viewOptions.selectedTab === 'constructors'}" v-on:click="setTab('constructors')" class="site-nav-button">
              Constructor's Championship
            </button>
          </li>
        </ul>
      </nav>

      <raceresult :key="'races-'+viewOptions.seasonSelect" v-if="viewOptions.selectedTab == 'races'" />

      <driverstandings v-if="viewOptions.selectedTab == 'drivers'" :key="'drivers-'+viewOptions.seasonSelect" />

      <constructorstandings v-if="viewOptions.selectedTab == 'constructors'" :key="'constructors-'+viewOptions.seasonSelect" />

      <section v-if="viewOptions.loading == true" class="overlay">
        <div class="loading-spinner" />
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import constructorstandings from '~/components/constructorsStandings.vue'
import driverstandings from '~/components/driversStandings.vue'
import raceresult from '~/components/raceResult.vue'
import pageHeader from '~/components/pageHeader.vue'
import SeasonSelectMenu from '~/components/SeasonSelectMenu.vue'

export default {
  components: {
    constructorstandings,
    driverstandings,
    raceresult,
    pageHeader,
    SeasonSelectMenu
  },
  computed: mapState([
    'f1data',
    'viewOptions'
  ]),
  async fetch ({ store, route, payload }) {
    if (route.params.year === undefined) {
      const currentYear = new Date().getFullYear()
      route.params.year = currentYear
    }
    await store.dispatch('getData', route.params.year)
  },
  methods: mapMutations([
    'setTab'
  ])

}
</script>

<style lang="scss">
  @import '~/assets/css/pitwall.scss'
</style>
