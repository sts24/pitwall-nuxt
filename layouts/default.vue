<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const $this = this
    return axios.get('https://ergast.com/api/f1/seasons.json?limit=1000')
      .then((res) => {
        $this.$store.commit('setSeasons', res.data.MRData.SeasonTable.Seasons)
      })
  }
}
</script>
