<template>
    <div class="about-first" >
       <div class="container">
           <fa-icon :icon="['fas','long-arrow-alt-down']" @click="smooth()"/>
           <div class="row">
               <div class="col-md-7">
                  <p class="tittle">
                      Momentum
                  </p>
                  <p class="desc">Launch your product — and savor the momentum</p>
                  <input type="submit" value="Get the App">
                  
               </div>
               <div class="col-md-5">
                   <img src="@/assets/about/first.png" alt="">
               </div>
           </div>
       </div>
    </div>
</template>
<style lang="scss">

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
@keyframes moving{
    0%{
        transform: translateY(0)  translateX(-50%);;
    }
    100%{
        transform: translateY(20px)  translateX(-50%);;
    }
}



//----------------------------------------------------------------------------------
.about-first{
    background: linear-gradient(100deg, #D71172, #620F53);
    position: relative;
    overflow: hidden;
      svg{
                position: absolute;
                bottom: 30px;
                left: 50%;
                font-size: 40px;
                cursor: pointer;
                z-index: 100;
                animation: moving .7s linear infinite alternate;
                path{
                    fill: white;
                }
            }
        .container .row div:last-of-type img{
            width: 130%;
            margin-top: 10px;
            transform: translateX(-40px);
            z-index: 1;
             @include maxmediam{
                     width: 150%;
                      transform: translateX(-80px);
                }
                @include maxsmall{
               width:60%;
                      margin: auto;
                      display: block;
                      transform: translateX(0px) ;
            }
                @include maxmobile{
               width:200px;
            }
        }
        .container .row div:first-of-type{
            padding-top: 10%;
            color: white;
            @include maxsmall{
                padding-top: 1%;
                z-index: 10;
            }
            .tittle{
                font-size: 55px;
                font-weight: 700;
                margin-bottom: 5px;
                @include maxmediam{
                      font-size: 50px;
                }
                 @include maxsmall{
                 margin-bottom:0px;
                 font-size: 40px;
            }
            }
            .desc{
                font-size: 31px;
                @include maxmediam{
                    font-size: 25px;
                }
                 @include maxsmall{
                font-size: 17px;
            }
            }
            input{
                padding: 18px 40px;
                border: none;
                background-color: #fc2d91;
                color: white;
                 @include maxmediam{
                     padding: 15px 30px;
                }
                @include maxsmall{
                padding: 10px 20px;
            }
                &:hover{
                    background-color: white;
                    color: rgb(34, 34, 34);
                    transition: all .5s linear;
                    font-weight:600
                }
            }
          

        }
}
</style>
<script>
export default {
    name:"about-first",
    mounted(){
        const first=document.querySelector(".about-first");
         first.style.height=window.innerHeight - document.querySelector(".myheader").offsetHeight+"px";
    },
    methods:{
        smooth:function(){
            const secod=document.querySelector(".about-second");
            secod.scrollIntoView({
                behavior:"smooth"
            })
        }
    }
}
</script>