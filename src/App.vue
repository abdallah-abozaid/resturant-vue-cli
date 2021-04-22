<template>
  <div class="app">
    <theheader/>
    <div class="preload">
      <img src="@/assets/preload.gif" alt="">
    </div>
  </div>
</template>

<style lang="scss">
.preload{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100;
  img{
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  }
}
</style>
<script>
import Theheader from './components/myheader/theheader.vue'
export default {
  name:"app",
  components:{
    Theheader
  },
  mounted(){
    window.onload=function(){
      document.querySelector(".preload").style.display="none"
    }
  }
}
</script>
    