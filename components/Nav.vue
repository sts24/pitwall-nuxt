<template>
	<nav class="type-select">
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
</template>

<script>
	import { mapState, mapMutations } from "vuex";

	export default {
		computed: mapState(["f1data", "viewOptions"]),
		methods: mapMutations(["setTab"]),
	};
</script>