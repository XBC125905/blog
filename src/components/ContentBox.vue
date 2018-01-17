<template>

  <div id="contentbox" class="content-box clearfix">
    <item-panal v-for="(item,key) in this.$store.state.items.slice((this.$store.state.currentPage-1)*this.$store.state.onePageNums,this.$store.state.currentPage*this.$store.state.onePageNums)" :item="item" :key="key">
    </item-panal>
  </div>
</template>

<script>
  import ItemPanal from './ItemPanal'

  export default {
    components: {
      ItemPanal
    },
    name: 'content-box',

    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
