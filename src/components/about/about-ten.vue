<template>
    <div class="about-ten  overflow-hidden">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <fa-icon :icon="['fas','quote-left']" data-aos="zoom-in"/>
      <p>HeadNulla vitae elit libero. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis</p>
    </div>
    <div class="carousel-item">
      <fa-icon :icon="['fas','quote-left']" data-aos="zoom-in"/>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis</p>
    </div>
    <div class="carousel-item">
      <fa-icon :icon="['fas','quote-left']" data-aos="zoom-in"/>
            <p>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, avida at eget metus. Etiam porta sem malesuada magna mollis</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span> <fa-icon :icon="['fas','chevron-left']"/> </span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span> <fa-icon :icon="['fas','chevron-right']"/> </span>
    <span class="sr-only">Next</span>
  </a>
</div>
<img src="@/assets/about/ten.png" alt="">
    </div>
</template>
<script>
export default {
    name:"about-ten",
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
.about-ten{
    margin: 0px 0px 100px;
    img{
        width: 80%;
        display: block;
        margin: 150px auto 50px;
    }
    .carousel-control-next,.carousel-control-prev{
            span svg{
                font-size: 50px;
                @include maxsmall{
                font-size: 40px;
            }
                path {
                    fill: black;
                }
            }
        }
       .carousel-indicators{
           bottom: -40px;
           li{
               background: black;
               width: 20px;
               height:8px!important;
               padding: 0;
               border: 0;
           }
       }
    .carousel-item{
        padding: 10px 20%;
        text-align: center;
        height: 300px;
         @include maxsmall{
                padding: 10px 15%;
            }
        
        p{
            font-size: 22px;
            color: #575757;
            @include maxmediam{
                font-size: 25px;
            }
            @include maxsmall{
                font-size: 18px;
            }
        }
        svg{
            font-size: 70px;
            margin: 30px;
            @include maxmediam{
                font-size: 55px;
            }
            @include maxsmall{
                font-size: 46px;
            }
            path{
                fill:rgb(192, 192, 192)
            }
        }
        
    }
}
</style>