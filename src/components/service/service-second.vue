<template>
    <div class="service-second">
        <div class="container">
            <p>OUR PROJECTS</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <swiper
        Navigation
        loop=true
     :pagination="{ clickable: true }"
    :slides-per-view="3"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  
    <swiper-slide>
        <div class="swiper-card">
            <img src="@/assets/service/project-1.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide> 
        <div class="swiper-card">
            <img src="@/assets/service/project-2.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
        </swiper-slide>
    <swiper-slide> 
        <div class="swiper-card">
            <img src="@/assets/service/project-3.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
        </swiper-slide>
    <swiper-slide> 
        <div class="swiper-card">
            <img src="@/assets/service/project-4.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
        </swiper-slide>
    <swiper-slide> 
        <div class="swiper-card">
            <img src="@/assets/service/project-5.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
        </swiper-slide>
    <swiper-slide> 
        <div class="swiper-card">
            <img src="@/assets/service/project-6.jpg" alt="">
            <div class="inner">
                <p>work tittle</p>
                <p>work description</p>
            </div>
        </div>
        </swiper-slide>
  </swiper>


  </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
  import 'swiper/swiper.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import 'swiper/swiper.scss';
export default {
    name:"service-second",
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
     data() {
      return {
        parallaxSwiperWidth:0,
        
      }
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
.service-second{
    margin: 150px 0;
    text-align: center;
    .swiper-slide {
    padding: 10px 10px 50px;
    @include maxmobile{
                    padding: 3px;
                }
}
    .swiper-container{
        overflow-y: visible;
            height: 460px;
            @include maxlarge{
                height: 400px;
            }
            @include maxmediam{
                height: 300px;
            }
            @include maxsmall{
                height: 230px;
            }
            @include maxmobile{
                height: 200px;
            }
            @include maxtiny{
                height: 150px;
            }
    }
    .swiper-pagination-bullet-active {
    opacity: 1;
    background: #EC2943!important;
}
.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
}
    .container > p:first-of-type{
        font-size: 45px;
    }
    .container > p:last-of-type{
        color: gray;
        margin-bottom: 40px;
    }
    .swiper-wrapper .swiper-slide .swiper-card{
        position: relative;
        overflow: hidden;
        &:hover .inner{
                bottom: 0;
                transition: all .5s linear;
            }
        &:hover img{
                transform: scale(1.3);
                transition: all .5s linear;
            }
        img{
            width: 100%;
        }
        .inner{
            position: absolute;
            bottom: -100%;
            left: 0;
            width: 100%;
            height: 100px;
            background-color: #EC2943;
            color: white;
            text-align: center;
            padding: 10px;
            p{
                    @include maxlarge{
                    margin-bottom: 0;
                }
                @include maxmediam{
                }
                @include maxsmall{
                    font-size: 12px;
                }
                @include maxmobile{
                     font-size: 11px;
                }
            }
            @include maxlarge{
                height: 80px;
            }
            @include maxmediam{
                height: 70px;
            }
            @include maxsmall{
                height: 60px;
            }
            @include maxmobile{
                height: 40px;
                padding: 0;
            }
            
        }
    }
}
</style>