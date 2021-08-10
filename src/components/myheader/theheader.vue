<template>
    <div class="theheader">
<div class="myheader">
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#"><img src="@/assets/header/logo.png" alt=""></a>
  <button class="navbar-toggler" @click="clicked($event)" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="first disabled"></span>
    <span class="second disabled"></span>
    <span class="therd disabled"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active" @click="actived($event)">
        <router-link class="nav-link" to="/">About</router-link>
      </li>
      <li class="nav-item" @click="actived($event)">
       <router-link class="nav-link" to="/service">Service</router-link>
      </li>
      <li class="nav-item" @click="actived($event)">
        <router-link class="nav-link" to="/features">Features</router-link>
      </li>
      <li class="nav-item" @click="actived($event)">
        <router-link class="nav-link" to="/downloud">Download</router-link>
      </li>
    </ul>
  </div>
</nav>


</div>
</div>





<router-view />
    
    </div>
</template>
<script>
export default {
    name:"theheader",
    methods:{
        clicked:function(event){
            if(event.target.classList.contains("navbar-toggler")){
            event.target.classList.toggle("clicked");
            }else{
               event.target.parentElement.classList.toggle("clicked"); 
            }
        },
        actived:function(event){
          var links=document.querySelectorAll(".navbar-nav .nav-item");
          for(var i=0;i<links.length;i++){
            links[i].classList.remove("active")
          }
          event.target.classList.add("active");
        }
    },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
//---------------------------------------------------------------------------
@mixin maxlarge {
  @media (max-width: 1200px) {
    @content;
  }
}
@mixin maxmediam {
  @media (max-width: 992px) {
    @content;
  }
}
@mixin maxsmall {
  @media (max-width: 768px) {
    @content;
  }
}
@mixin maxmobile {
  @media (max-width: 576px) {
    @content;
  }
}
@mixin maxtiny {
  @media (max-width: 350px) {
    @content;
  }
}
@mixin minlarge {
  @media (min-width: 1200px) {
    @content;
  }
}
//----------------------------------------------------------------------------------
.myheader{
    background: linear-gradient(45deg, #D71172, #620F53);
    padding-top: 7px;
}
.myheader .navbar-expand-lg .navbar-collapse {
    flex-direction: row-reverse;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active{
    border-bottom: 3px solid white;
    background-color: rgba(255, 255, 255, 0.247);
}
.myheader .navbar-light .navbar-nav .nav-link{
    color: white!important;
    font-size: 17px;
    margin-left: 20px;
    text-align: center;
    font-family: 'Lobster', cursive;
    padding-bottom: 3px;
    &:hover{
     border-bottom: 3px solid white;
    background-color: rgba(255, 255, 255, 0.247);
    }
    @include maxmediam{
      padding-bottom: 1px;
      padding-top: 15px;
      
      width: 20%;
      margin: auto;
    }
    @include maxmobile{
      width: 30%;
    }
}
.myheader .navbar-toggler{
    border:none;
    z-index: 10;
    
    span.first,span.second,span.therd{
        width: 30px;
        height: 4px;
        background-color: white;
        margin: auto;
        display: block;
        margin:5px 0px;
        transition: all .5s linear;
        z-index: 1;
        border-radius: 7px;
    }
}
.myheader .navbar-toggler.clicked{
    padding: 7px 8px;
    span.second{
        display: none;
    }
    span.first{
        transform: rotate(45deg) translateY(5px) translateX(2px);
        height: 5px;
        
    }
    span.therd{
        transform: rotate(-45deg) translateY(-5px) translateX(1px);
        height: 5px;
    }
}
</style>