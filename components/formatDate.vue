<script>

export default {
  name: 'FormatDate',
  props: ['date'],
  methods: {
    formatDate (raceDate) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const raceUTC = new Date(raceDate)

      return months[raceUTC.getMonth()] + ' ' + raceUTC.getDate() + ', ' + raceUTC.getFullYear()
    }
  }
}

</script>

<template>
  <time>{{ this.formatDate(this.date) }}</time>
</template>
