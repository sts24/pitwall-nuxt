<template>
  <div class="season-select-widget">
    <label for="season-select">Select a Season</label>
    <div class="season-select-wrapper">
      <select id="season-select" v-model="selectSeason" class="season-select">
        <option v-for="season in f1data.seasons" v-bind="season.index" :value="season.season" :key="season.season">
          {{ season.season }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SeasonSelectMenu',
  computed: {
    ...mapState([ 'f1data', 'viewOptions' ]),
    selectSeason: {
      get () {
        return this.$route.params.year
      },
      set (newSeason) {
        this.$router.push({ name: 'year', params: { year: newSeason } })
      }
    }
  }
}
</script>
