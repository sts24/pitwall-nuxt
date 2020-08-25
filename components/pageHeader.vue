<script>
import SeasonSelectMenu from './SeasonSelectMenu.vue'
export default {
  name: 'Pageheader',
  components: {
    SeasonSelectMenu
  }
}
</script>

<template>
  <header class="site-header">
    <div class="header-contents">
      <img srcset="@/assets/images/pitwall-horizontal.svg" class="site-title" width="400" height="41">
    </div>

    <SeasonSelectMenu />
  </header>
</template>
