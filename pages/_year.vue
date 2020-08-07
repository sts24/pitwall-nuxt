<template>
    <main class="data-area">
      
      <!-- <section class="season-standings">
        <driverstandings :key="'drivers-'+viewOptions.seasonSelect" />
        <constructorstandings :key="'constructors-'+viewOptions.seasonSelect" />
      </section> -->

      <raceresult :key="'races-'+viewOptions.seasonSelect" v-if="viewOptions.selectedTab == 'races'" />


      <section v-if="viewOptions.loading == true" class="overlay">
        <div class="loading-spinner" />
      </section>
    </main>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import constructorstandings from "~/components/constructorsStandings.vue";
	import driverstandings from "~/components/driversStandings.vue";
	import raceresult from "~/components/raceResult.vue";

	export default {
		components: {
			constructorstandings,
			driverstandings,
			raceresult,
		},
		computed: mapState(["f1data", "viewOptions"]),
		async fetch({ store, route, payload }) {
			if (route.params.year === undefined) {
				const currentYear = new Date().getFullYear();
				route.params.year = currentYear;
			}
			await store.dispatch("getData", route.params.year);
		},
	};
</script>

<style lang="scss">
	@import "~/assets/css/pitwall.scss";
</style>
