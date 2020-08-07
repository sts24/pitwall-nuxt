<template>
	<nav class="type-select">
		<ul class="site-nav">
			<li>
				<button :class="{'selected': viewOptions.selectedTab === 'races'}" v-on:click="setTab('races')" class="site-nav-button">
					Race Results
				</button>
			</li>
			<li>
				<button :class="{'selected': viewOptions.selectedTab === 'standings'}" v-on:click="setTab('standings')" class="site-nav-button">
					Standings
				</button>
			</li>
		</ul>
    </nav>
</template>

<script>
	import { mapState, mapMutations } from "vuex";

	export default {
		computed: mapState(["f1data", "viewOptions"]),
		methods: mapMutations(["setTab"]),
	};
</script>