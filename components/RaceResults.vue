<script>
	import { mapState, mapActions } from "vuex";
	import RaceTable from "@/components/RaceTable.vue";

	export default {
		name: "Raceresult",
		components: {
			RaceTable,
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
    <RaceTable :item="race" v-for="(race) in f1data.races" :key="race.date" />
  </section>
</template>
