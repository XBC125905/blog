<template>
  <div class="navigation-bar" id="navigationbar">
    <button class="button" v-for="(type,key) in this.$store.state.types" v-on:click="changeItems">{{type}}</button>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'navigation-bar',
    /**
     * 与vuex中的getters关联
     */
    computed: mapGetters([]),
    methods: {
      ...mapActions({
        /**
         * 映射 this.setContentboxDisplay() 为 this.$store.dispatch('setContentboxDisplay')
         */
        setContentboxDisplay: 'setContentboxDisplay',
        /**
         * 映射 this.setMdDisplay() 为 this.$store.dispatch('setMdDisplay')
         */
        setMdDisplay: 'setMdDisplay'
      }),
      ...mapMutations({
        setMd: 'setMd',
        /**
         * 映射 this.setItems() 为 this.$store.dispatch('setItems')
         */
        setItems:'setItems'
      }),
      showMd: function (isShow, src) {
        let that = this
        if (isShow) {
          this.$ajax({
            method: 'get',
            url: src
          }).then(function (res) {
            that.setMd(that.$marked(res.data))
          }).catch(function (error) {
            that.setMd(that.$marked('没有相关内容！'))
          })
          //this.setMd(src)
          this.setMdDisplay(true)
          this.setContentboxDisplay(false)
        } else {
          this.setMdDisplay(false)
          this.setContentboxDisplay(true)
        }
      },
      changeItems: function (e) {
        this.setItems(e.target.innerText)
        this.showMd(false)
      }
    }
  }
</script>

<style scoped>
  .button{
    background-color: #cccccc;
    border: none;
    color: black;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 5px;
    cursor: pointer;
  }
  .button:hover{
    background-color: #cccccc;
    color: white;
  }

</style>
