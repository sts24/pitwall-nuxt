<template>
  <span class="grid-change grid-up">{{ gridDiff }}</span>
</template>

<script>
export default {
  name: 'GridChange',
  props: ['data'],
  methods: {
    gridFinishDiff (gridStart, finishPos) {
      const gridDiff = gridStart - finishPos

      if (gridDiff > 0) {
        return '⬆︎' + gridDiff
      } else if (gridDiff < 0) {
        return '⬇︎' + Math.abs(gridDiff)
      }
    }
  }
}
</script>
