<template>

	<section class="standings-data">
		<Driverstandings />

		
		<ConstructorStandings />
	</section>
	
	
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import ConstructorStandings from "~/components/ConstructorsStandings";
	import Driverstandings from "~/components/DriversStandings";

	export default {
		name: "Standings",
		components: {
			ConstructorStandings,
			Driverstandings,
		},
		computed: mapState(["f1data", "viewOptions"]),
	};
</script>