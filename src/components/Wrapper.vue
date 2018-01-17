<template>
  <div id="app" class="wrapper">
    <side-bar></side-bar>
    <navigation-bar v-on:listenToNavigationbarEvent="showMD"></navigation-bar>
    <!--<content-box></content-box>-->
    <div class="content-box">
      <div id="md" class=" markdown markdown-body entry-content github" style="width: 95%">

      </div>
    </div>

  </div>
</template>

<script>
  import SideBar from './SideBar'
  import NavigationBar from './NavigationBar'
  import ContentBox from './ContentBox'

  import '../assets/css/github.css'
  import 'github-markdown-css'
  import '../assets/css/markdown.css'

  export default {
    components: {
      ContentBox,
      NavigationBar,
      SideBar
    },
    name: 'wrapper',

    methods: {
      showMD: function (data) {
        document.getElementById('md').innerHTML = data
      }
    }

  }
</script>

<style>
  #app {

  }
</style>
