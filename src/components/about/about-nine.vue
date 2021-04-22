<template>
    <div class="about-nine">
      <div class="container">
          <div class="row">
              
              <div class="col-md-4">
                  <img src="@/assets/about/nine.jpg" alt="">
              </div>
              <div class="col-md-8">
                  <p>Aenean Consectetur Porta</p>
                  <p>Parturient Tortor </p>
                  <p>Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"about-nine",
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
.about-nine{
    margin: 170px 0;
    .container .row div:last-of-type{
        @include maxlarge{
            padding-top: 30px;
            }
             @include maxmediam{
                 padding-top:10px;
            }
             @include maxsmall{
            }
        p:nth-of-type(1){
            font-size: 13px;
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
            font-size: 20px;
            color: #6b6b6b;
            width: 65%;
            @include maxlarge{
                font-size: 18px;
                 width: 70%;
            }
            @include maxmediam{
                  font-size: 16px;
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
            width: 75%;
            display: block;
            margin: 60px auto 0;
            @include maxlarge{
                margin-top: 80px;
                width: 80%;
            }
            @include maxmediam{
                 margin-top: 55px;
                width: 90%;
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