<template>
  <header>
    <div class="about">
      <div class="cover-author-image">
        <a href="http://rtwith.com"><img :src="imgUrl" alt="小白菜"></a>
      </div>
      <div class="author-name">小白菜</div>
      <p>我是一个侧重于B/S架构的软件开发者，总是渴望学习和挑战新的技术。</p>
    </div>
  </header> <!-- End Header -->
</template>

<script>
  export default {
    name: 'header-panal',
    data(){
      return{
        imgUrl:'./static/assets/img/xbc1.png',
        timer:'',
        index:1
      }
    },
    methods:{
      autoPlay(){
        let _this=this
        _this.timer=setInterval(function () {
          let index=Math.ceil(Math.random()*3)
          while (_this.index===index){
            index=Math.ceil(Math.random()*3)
          }
          _this.imgUrl='./static/assets/img/xbc'+index.toString()+'.png'
          _this.index=index
        },3000)
      },
      stopPlay(){
        clearInterval(this.timer);
      }
    },
    mounted:function () {
      this.autoPlay();
    },
    beforeDestroy:function () {
      this.stopPlay();
    }
  }
</script>

<style scoped>
  img:hover{
    transform: scale(1.3);
  }
</style>
