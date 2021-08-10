<template>
    <div class="service-second  overflow-hidden">
        <div class="container">
            <!-- <img src="@/assets/service/project-1.jpg" alt="">
            <img src="@/assets/service/project-2.jpg" alt=""> -->
            <p data-aos="zoom-in-up">OUR <span style="color:#CD1170">services</span></p>
            <p data-aos="zoom-in-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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
            slidesPerView:3,
            spaceBetween:20
        },
        1000:{
            slidesPerView:4,
            spaceBetween:20
        }
    }"
  >
    <swiper-slide><img src="@/assets/service/ser1.jpg" alt=""> 
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/ser2.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/ser7.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/ser4.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/ser5.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img src="@/assets/service/ser6.jpg" alt="">
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
    margin: 50px 0;
    padding: 70px 0 30px;
    text-align: center;
    background-image: url(~@/assets/service/back2.png);
    background-size: cover;
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
        overflow: hidden;
        border: 1px solid grey;
        box-shadow: 1px 1px 9px grey;
        border-radius: 35px;
        height: 200px;
        img{
            width: 100%;
            height: 200px;
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