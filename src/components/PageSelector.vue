<template>
  <div class="page-select-bar">
    <ul>
      <li>
        <p><span class="page-number">第-{{this.$store.state.currentPage}}-页，共-{{this.$store.state.pages}}-页</span></p>
      </li>
      <li>
        <p><button class="button" v-bind:disabled="this.$store.state.currentPage===1"
                   v-on:click="this.setPreviousPage">上一页</button>
        <button class="button" v-bind:disabled="this.$store.state.currentPage===this.$store.state.pages"
                v-on:click="this.setNextPage">下一页</button></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'page-selector',
    methods: {
      ...mapMutations({
        /**
         * 映射 this.setPreviousPage() 为 this.$store.dispatch('setPreviousPage')
         */
        setPreviousPage: 'setPreviousPage',
        setNextPage:'setNextPage'
      })
    }
  }
</script>

<style scoped>
  ul{
    display: flex;
    padding: 0 20px 0 0;
    margin: 0;
    width: 100%;
  }
  ul>li{
    list-style-type: none;
    flex: 1;
    text-align: center;
  }
  .button{
    background-color: #cccccc;
    border: none;
    color: black;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0px 5px;
    cursor: pointer;
  }
  .button:disabled{
    background-color: #999999;
    cursor: not-allowed;
  }
</style>
