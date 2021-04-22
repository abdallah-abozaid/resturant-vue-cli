<template>
    <div class="about-therd">
      <div class="container">
          <div class="row">
              <div class="col-md-7">
                  <p>Aenean Consectetur</p>
                  <p>Cay sociis nato que penatibus et</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
              </div>
              <div class="col-md-5">
                  <img src="@/assets/about/therd.png" alt="">
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"about-therd",
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
.about-therd{
    margin-top: 50px;
    .container .row div:first-of-type{
        padding: 10% 20px 0;
        @include maxlarge{
                padding:12% 20px 0;
            }
             @include maxmediam{
                     padding:14% 20px 0;
            }
             @include maxsmall{
               padding:0% 20px 0;
            }
        p:nth-of-type(1){
            font-size: 16px;
            color: #a8a8a8;
            letter-spacing: 4px;
            text-transform: uppercase;
            @include maxlarge{
                font-size: 14px;
            }
             @include maxmediam{
                  font-size: 13px;
            }
            @include maxsmall{
                font-size: 11px;
                margin-bottom: 3px;
            }
        }
        p:nth-of-type(2){
            font-size: 59px;
           line-height: 65px;
           font-weight: 500;
           margin-bottom: 20px;
           @include maxlarge{
                font-size: 45px;
           line-height: 50px;
           margin-bottom: 20px; 
            }
             @include maxmediam{
                  font-size: 40px;
                  line-height: 40px;
            }
            @include maxsmall{
              font-size: 38px;
                  line-height: 40px;
            }
        }
        p:nth-of-type(3){
            font-size: 22px;
            color: #a8a8a8;
            width: 85%;
            @include maxlarge{
                font-size: 18px;
            }
            @include maxmediam{
                  font-size: 17px;
            }
            @include maxsmall{
              font-size: 14px;
              width: 95%;
            }
        }
    }
    .container .row div:last-of-type{
        img{
            width: 70%;
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