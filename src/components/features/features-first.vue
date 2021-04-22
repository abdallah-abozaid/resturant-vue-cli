<template>
    <div class="features-first">
       <div class="container">
           <img src="@/assets/features/logo.svg" alt="">
           <p>A new take on collaborative docs.</p>
           <div class="imges">
               <a href="#"><img src="@/assets/features/ios.png" alt=""></a>
           <a href="#"><img src="@/assets/features/googleplay.png" alt=""></a>
           </div>
           <hr>
       </div>
    </div>
</template>
<script>
export default {
    name:"features-first",
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


//---------------------------------------------------------------------------------
@import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
.features-first{
  overflow: hidden;
    .container{
        img{
            width: 25%;
            display: block;
            margin: 20px auto;
            @include maxsmall{
                width: 30%;
            }
        }
        p{
            font-size: 60px;
            text-align: center;
            font-family: 'Orelega One', cursive;
            @include maxlarge{
                font-size: 50px;
            }
            @include maxmediam{
                font-size: 40px;
            }
            @include maxsmall{
                font-size: 30px;
            }
            
        }
       .imges{
           margin: 10px auto;
           text-align: center;
        a{
            display: inline-block;
            text-align: center;
            vertical-align: top;
            margin: auto;

            img{
               width: 160px;
               height: 50px;
               margin-left: 5px;
                @include maxlarge{
                 width: 150px;
            }
            @include maxmediam{
              width: 140px;
               height: 40px;
            }
            @include maxsmall{
             width: 130px;
               height: 30px;
            }
            }
        }
       }
       hr{
           margin-top: 50px;
           border-top: 1px solid rgb(116, 116, 116);
       }
    }
}
</style>