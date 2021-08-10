<template>
    <div class="about-seven  overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-6" data-aos="fade-down">
                   <p>+12k</p>
                   <p>Nibh Elit Tristique</p> 
                </div>
                <div class="col-md-3 col-6" data-aos="fade-up">
                    <p>84</p>
                    <p>Aenean Condimentum</p>
                </div>
                <div class="col-md-3 col-6" data-aos="fade-down">
                    <p>3,07</p>
                    <p>Quam Inceptos</p>
                </div>
                <div class="col-md-3 col-6" data-aos="fade-up">
                    <p>24h</p>
                    <p>Ullamcorper </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    bane:"about-seven",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap');
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
.about-seven{
    margin-top: 170px;
    margin-bottom: 170px;
    .container .row div{
        text-align: center;
        @include maxsmall{
                margin-bottom: 37px;
            }
        p:first-of-type{
            font-size: 45px;
            font-family: 'Zen Dots', cursive;
            margin-bottom: 10px;
            @include maxmediam{
                font-size: 40px;
                margin-bottom: 6px;
            }
            @include maxsmall{
                margin-bottom: 1px;
            }
        }
        p:last-of-type{
            font-size: 18px;
            width: 70%;
            margin: auto;
            font-family: 'Roboto Mono', monospace;
            @include maxmediam{
                font-size: 16px;
            }
            @include maxsmall{
                font-size: 13px;
            }
        }
    }
}
</style>