<template>
    <div class="about-four">
      <div class="container">
          <div class="row">
              
              <div class="col-md-4">
                  <img src="@/assets/about/four.png" alt="">
              </div>
              <div class="col-md-8">
                  <p>ConsectUltricies </p>
                  <p>Amet Ipsum </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"about-four",
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
.about-four{
    margin-top: 100px;
    .container .row div:last-of-type{
        padding-top: 40px;
        @include maxlarge{
            padding-top: 30px;
            }
             @include maxmediam{
                 padding-top:10px;
            }
             @include maxsmall{
            }
        p:nth-of-type(1){
            font-size: 15px;
            color: #a8a8a8;
            letter-spacing: 4px;
            text-transform: uppercase;
            @include maxlarge{
                font-size: 13px;
            }
             @include maxmediam{
                  font-size: 11px;
                   margin-bottom: 8px;
            }
            @include maxsmall{
                margin-bottom: 0px;
            }
        }
        p:nth-of-type(2){
            font-size: 50px;
           font-weight: 700;
           margin-bottom: 15px;
           @include maxlarge{
                font-size: 40px;
            }
             @include maxmediam{
                  font-size: 37px;
            }
            @include maxsmall{
              font-size: 38px;
              margin-bottom: 2px;
            }
        }
        p:nth-of-type(3){
            font-size: 18px;
            color: #a8a8a8;
            width: 65%;
            @include maxlarge{
                font-size: 16px;
                 width: 70%;
            }
            @include maxmediam{
                  font-size: 14px;
                  width: 90%;
            }
            @include maxsmall{
              font-size: 15px;
              width: 95%;
            }
        }
    }
    .container .row div:first-of-type{
        img{
            width: 100%;
            @include maxmediam{
                transform: scale(1.1);
            }
            @include maxsmall{
               width: 50%;
               display: block;
               margin: 10px auto; 
                
            }
        }

    }


}
</style>