<template>
    <div class="about-second  overflow-hidden">
       <div class="container">
           <div class="first-comp" data-aos="fade-down">
               <p>Aenean Consectetur Porta</p>
               <p>Nullam quis risus eget urna mollis ornare vel eu leo.</p>
           </div>
           <div class="second-com">
               <img src="@/assets/about/second.png" alt="" data-aos="fade-down">
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"about-second",
     mounted(){
        const secod=document.querySelector(".about-second");
         secod.style.height=window.innerHeight+"px";
        const first_comp=document.querySelector(".about-second .first-comp");
       const img=document.querySelector(".about-second .second-com img");
        img.style.height=window.innerHeight -first_comp.offsetHeight  +"px";

    }
}
</script>
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


//----------------------------------------------------------------------------------
.about-second{
    background-color: #1B1B1B;
    .container .first-comp{
        color: white;
        padding-top: 40px;
        text-align: center;
        p:first-of-type{
            color: #a8a8a8;
            @include maxsmall{
                font-size: 14px;
            }
        }
        p:last-of-type{
            font-size: 40px;
            width: 80%;
            margin: auto;
            font-weight: 700;
            padding-bottom: 40px;
            line-height: 40px;
            @include maxmediam{
                font-size: 30px;
            }
            @include maxsmall{
                font-size: 27px;
                width: 90%;
            }
            @include maxmobile{
                font-size: 20px;
                width: 90%;
                line-height: 25px;
                  padding-bottom:20px;
            }
        }

    }
    .container .second-com{
        img{
            width: 100%;
        }
    }
}
</style>