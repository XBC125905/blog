<template>
  <aside class="sidebar">
    <header-panal></header-panal>
    <footer-panal></footer-panal>
  </aside> <!-- End Sidebar -->
</template>

<script>
  import HeaderPanal from './HeaderPanal'
  import FooterPanal from './FooterPanal'

  export default {
    components: {
      FooterPanal,
      HeaderPanal
    },
    name: 'SideBar'
  }
</script>

<style scoped>

</style>
