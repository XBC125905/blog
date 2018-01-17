<template>
  <div class="wrapper" v-bind:style="{minHeight:getMinHeight}">
    <side-bar></side-bar>
    <navigation-bar></navigation-bar>
    <content-box v-show="this.$store.state.contentboxDisplay"></content-box>
    <div class="content-box" v-show="this.$store.state.mdDisplay">
      <div id="md" v-html="this.$store.state.md" class=" markdown markdown-body entry-content github"
           style="width: 95%;">
      </div>
    </div>
    <page-selector v-show="!this.$store.state.mdDisplay"></page-selector>
    <div v-show="scrolled" v-on:click="backToTop()">
      <back-top></back-top>
    </div>
  </div>

</template>

<script>
  import SideBar from '../components/SideBar'
  import NavigationBar from '../components/NavigationBar'
  import ContentBox from '../components/ContentBox'
  import PageSelector from '../components/PageSelector'
  import BackTop from '../components/BackTop'

  export default {
    components: {
      PageSelector,
      BackTop,
      ContentBox,
      NavigationBar,
      SideBar
    },
    data () {
      return {
        scrolled: false
      }
    },
    name: 'index',
    computed: {
      getMinHeight: function () {
        if (window.innerHeight !== undefined) {
          return window.innerHeight + 'px'
        } else {
          let B = document.body
          let D = document.documentElement
          return Math.min(D.clientHeight, B.clientHeight) + 'px'
        }
      }
    },
    methods: {
      isScrolled () {
        if (this.getScrollTop() > 50) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      },
      getScrollTop () {
        return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      },
      setScrollTop (value) {
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = value
        } else if (window.pageYOffset) {
          window.pageYOffset = value
        } else {
          document.body.scrollTop = value
        }
      },
      backToTop () {
        let that = this
        let scrollToptimer = setInterval(function () {
          let speed = that.getScrollTop() / 5
          if (that.getScrollTop() !== 0) {
            that.setScrollTop(that.getScrollTop() - speed)
          }

          if (that.getScrollTop() === 0) {
            clearInterval(scrollToptimer)
          }
        }, 20)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.isScrolled)
    }
  }
</script>

<style scoped>

</style>
