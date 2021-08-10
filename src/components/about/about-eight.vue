<template>
    <div class="about-eight  overflow-hidden">
      <div class="container">
          <div class="row">
              <div class="col-md-7" data-aos="fade-right">
                  <p>Aenean Consectetur Porta</p>
                  <p>Sem Risus Elit Vestibulum</p>
                  <p>Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
              </div>
              <div class="col-md-5">
                  <img src="@/assets/about/eight.jpg" alt="" data-aos="zoom-in">
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"about-eight",
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
.about-eight{
    margin-top: 80px;
    margin-bottom: 80px;
    .container .row div:first-of-type{
        padding-left: 130px;
        @include maxlarge{
            }
             @include maxmediam{
                 padding-left: 50px;
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
                font-size: 12px;
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
                font-size: 42px;
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
                font-size: 17px;
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
            width: 70%;
            margin-top: 80px;
            @include maxlarge{
                margin-top: 60px;
            }
            @include maxmediam{
                 width: 85%;
            }
            @include maxsmall{
                width: 55%;
                display: block;
                margin: 10px auto;
            }
        }

    }


}
</style>