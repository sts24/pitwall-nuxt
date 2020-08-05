<template>
  <div id="page">
    <PageHeader />
    <nuxt />
  </div>
</template>

<script>
	import axios from "axios";

	import PageHeader from "~/components/PageHeader.vue";

	export default {
		components: {
			PageHeader,
		},
		created() {
			const $this = this;
			return axios
				.get("https://ergast.com/api/f1/seasons.json?limit=1000")
				.then((res) => {
					$this.$store.commit(
						"setSeasons",
						res.data.MRData.SeasonTable.Seasons
					);
				});
		},
	};
</script>
