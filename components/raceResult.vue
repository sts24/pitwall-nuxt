<script>
	import { mapState, mapActions } from "vuex";
	import raceTable from "@/components/raceTable.vue";

	export default {
		name: "Raceresult",
		components: {
			raceTable,
		},
		computed: mapState(["f1data", "viewOptions"]),
		data() {
			return {
				showAllResults: false,
				sortNewestFirst: false,
				round: 0,
			};
		},
		updated() {
			// this.viewOptions.loading = false
		},
		methods: {
			...mapActions(["reverseSort"]),

			raceSelect(roundID) {
				this.round = roundID;

				if (window.innerWidth < 1400) {
					document
						.querySelector(".race-table")
						.scrollIntoView({ behavior: "smooth" });
				}
			},

			selectedRound(roundID) {
				const selected = roundID == this.round ? "selected-round" : "";
				return selected;
			},
		},
	};
</script>

<template>
  <section v-if="f1data.races.length > 0" class="race-grid">
    <raceTable :item="race" v-for="(race) in f1data.races" :key="race.date" />
  </section>
  <section v-else>
    <p class="message">No race data avalible. The season may not have started yet.</p>
  </section>
</template>
