<template>
    <div class="features-therd">
        <div class="container">
        <div class="row">
            <div class="first-com col-md-6">
               <img src="@/assets/features/fetur2.svg" alt="" data-aos="fade-up">
            </div>
            <div class="sec-com col-md-6" data-aos="fade-up">
                 <p>best service</p>
                <p>Itaque his sapiens semper vacabit. Qualis ista philosophia est, quae non interitum afferat pravitatis, sed sit contenta mediocritate vitiorum? Quid de Platone aut de Democrito loquar? Quis istud possit, inquit negare?</p>
                <hr>
                <p>Estne, quaeso, inquam, sitienti in bibendo voluptas? Duo Reges: constructio interrete.</p>
                <p>Josh Blenton, Product Manager at Blinkist</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"features-therd",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

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
.features-therd{
    padding: 100px 0;
    .container .row .first-com{
        img{
            width: 100%;
            @include maxmediam{
                height: 100%;
            }
            @include maxsmall{
                width: 75%;
                display: block;
                margin: auto;
            }
        }
    }
    .container .row .sec-com{
        padding-top: 1%;
        padding-right: 20px;
        overflow: hidden;
        @include maxlarge{
           padding-top: 2%;
            }
            @include maxsmall{
           text-align: center;
            }
        p:first-of-type{
            font-size: 45px;
            font-family: 'Orelega One', cursive;
            @include maxlarge{
                font-size: 40px;
            }
             @include maxmediam{
               font-size: 34px;
            }
        }
        p:nth-of-type(2){
            color: rgb(107, 107, 107);
            font-size: 19px;
            font-family: 'Open Sans', sans-serif;
            @include maxlarge{
                font-size: 17px;
            }
             @include maxmediam{
               font-size: 15px;
            }
        }
        p:nth-of-type(3){
            color: rgb(150, 150, 150);
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        @include maxlarge{
                font-size: 14px;
            }
            @include maxmediam{
               font-size: 12px;
            }
        }
        p:nth-of-type(4){
            color: black;
            font-weight: 700;
            font-size: 20px;
            font-family: 'Open Sans', sans-serif;
            @include maxlarge{
                font-size: 17px;
            }
             @include maxmediam{
               font-size: 15px;
            }
        }
        hr{
            margin: 40px 0;
            @include maxlarge{
              margin: 20px 0;
            }
             @include maxmediam{
                margin: 10px 0;
            }
        }
        
    }
}
</style>