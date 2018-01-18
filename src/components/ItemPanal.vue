<template>
  <article class="post">

    <a class="post-thumbnail" v-bind:style="{backgroundImage:'url('+item.imgsrc+')'}"
       v-on:click="showMd(true,item.src)"></a>

    <div class="post-content">
      <h2 class="post-title"><a href="#" v-on:click="showMd(true,item.src)">{{item.title}}</a></h2>
      <p>{{item.abstract}}</p>
      <span class="post-date">{{item.time}}</span>
    </div>
  </article>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'item-panal',
    props: {
      item: Object
    },
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
        setMd: 'setMd'
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
      }
    }
  }
</script>

<style scoped>

</style>
