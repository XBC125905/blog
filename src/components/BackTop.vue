<template>
  <img class="back-top" src="../assets/img/backToTop.png" alt="回到顶部" title="回到顶部">
</template>

<script>
  export default {
    name: 'back-top',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  img {
    position: fixed;
    right: 5px;
    bottom: 5px;
    width: 30px;
    cursor: pointer;
    z-index: 99999;
  }
  @media only screen and (min-width: 1250px) {
    .back-top {
      right: -moz-calc((100% - 1250px) / 2 + 5px);
      right: -webkit-calc((100% - 1250px) / 2 + 5px);
      right: calc((100% - 1250px) / 2 + 5px);
    }
  }
</style>
