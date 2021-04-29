<template>
    <div class="service-second">
        <div class="container">
            <!-- <img src="@/assets/service/project-1.jpg" alt="">
            <img src="@/assets/service/project-2.jpg" alt=""> -->
            <p>OUR PROJECTS</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <swiper
    :space-between="50"
    loop=true
    :pagination="{ clickable : true }"
    grabCursor
    :autoplay="{delay:4000}"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
        576:{
            slidesPerView:1,
            spaceBetween:10
        },
        700:{
            slidesPerView:2,
            spaceBetween:20
        },
        1000:{
            slidesPerView:3,
            spaceBetween:20
        }
    }"
  >
    <swiper-slide><img src="@/assets/service/project-1.jpg" alt=""> 
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/project-2.jpg" alt="">
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/project-3.jpg" alt="">
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/project-1.jpg" alt="">
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/project-2.jpg" alt="">
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/project-3.jpg" alt="">
    <div class="inner">
        <p>work tittle</p>
        <p>work description</p>
    </div>
    </swiper-slide>
  </swiper>

  </div>
    </div>
</template>
<script>
import SwiperCore, { Pagination, A11y ,Autoplay } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.scss';

  SwiperCore.use([Pagination, A11y,Autoplay]);
export default {
    name:"service-second",
    components: {
         Swiper,
      SwiperSlide,
    },
    methods: {
    },
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
@mixin maxmobile2 {
  @media (max-width: 700px) {
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
.service-second{
    margin: 150px 0;
    text-align: center;
    .container{
            overflow: hidden;
    padding-bottom: 100px;
    }
    .swiper-pagination-bullets {
    bottom: -30px!important;
}
.swiper-container {
overflow: visible;
}
    .swiper-slide {
        position: relative;
        overflow: hidden;
        
        img{
            width: 100%;
            @include maxmobile2{
            width: 76%;
            }
        }
        &:hover .inner{
            bottom: 0;
            transition: all .7s linear;
        }
        .inner{
            position: absolute;
            bottom: -50%;
            left: 0;
            width: 100%;
            height: 100px;
            background-color: #EC2943;
            padding-top: 20px;
            @include maxsmall{
                       height: 70px;
                       padding-top: 10px;
                    }
            @include maxmobile2{
            width: 76%;
            display: block;
            left: 50%;
            transform: translateX(-50%);
            }
            p{
                margin-bottom:0px ;
                color: white;
                &:first-of-type{
                    font-size: 24px;
                    @include maxsmall{
                        font-size: 18px;
                    }
                }
                &:last-of-type{
                    font-size: 15px;
                     @include maxsmall{
                        font-size: 12px;
                    }
                }
            }
        }
}
    

    .container > p:first-of-type{
        font-size: 45px;
    }
    .container > p:last-of-type{
        color: gray;
        margin-bottom: 40px;
    }
    
}
</style>