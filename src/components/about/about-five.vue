<template>
    <div class="about-five  overflow-hidden">
      <div class="container">
          <div class="row">
              <div class="col-md-7" data-aos="fade-right">
                  <p>Aenean Consectetur Porta</p>
                  <p>Magna Porta Sit Bibendum</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
              <div class="col-md-5">
                  <img src="@/assets/about/five.png" alt="" data-aos="zoom-in">
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"about-five",
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
.about-five{
    margin-top: 80px;
    .container .row div:first-of-type{
        padding: 10% 20px 0;
        @include maxlarge{
            }
             @include maxmediam{
            }
             @include maxsmall{
                 text-align: center;
            }
        p:nth-of-type(1){
            font-size: 14px;
            color: #a8a8a8;
            letter-spacing: 4px;
            text-transform: uppercase;
            @include maxlarge{
                font-size: 13px;
            }
             @include maxmediam{
                  font-size: 11px;
            }
            @include maxsmall{
                font-size: 11px;
                margin-bottom: 3px;
            }
        }
        p:nth-of-type(2){
            font-size: 52px;
           line-height: 58px;
           font-weight: 500;
           margin-bottom: 20px;
           @include maxlarge{
                font-size: 45px;
           line-height: 50px;
           margin-bottom: 20px; 
            }
             @include maxmediam{
                  font-size: 38px;
                  line-height: 40px;
            }
            @include maxsmall{
              font-size: 38px;
                  line-height: 40px;
                  margin-bottom: 10px;
            }
        }
        p:nth-of-type(3){
            font-size: 21px;
            color: #a8a8a8;
            width: 85%;
            @include maxlarge{
                font-size: 18px;
            }
            @include maxmediam{
                  font-size: 15px;
            }
            @include maxsmall{
              font-size: 14px;
              width: 95%;
              margin-bottom: 0px;
            }
        }
    }
    .container .row div:last-of-type{
        img{
            width: 80%;
            @include maxlarge{
                width: 85%;
            }
            @include maxmediam{
                width: 90%;
            }
            @include maxsmall{
                width: 45%;
                display: block;
                margin: 10px auto;
            }
        }

    }


}
</style>