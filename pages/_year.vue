<template>
    <main class="data-area">
      
	  <Nav />

      <RaceResult :key="'races-'+viewOptions.seasonSelect" v-if="viewOptions.selectedTab == 'races'" />

	  <Standings :key="standings" v-if="viewOptions.selectedTab == 'standings'" />

      <section v-if="viewOptions.loading == true" class="overlay">
        <div class="loading-spinner" />
      </section>

    </main>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import Standings from "~/components/Standings";
	import RaceResult from "~/components/RaceResults.vue";
	import Nav from "~/components/Nav";

	export default {
		components: {
			Standings,
			RaceResult,
			Nav,
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
