<template>
    <div class="downloud-five">
        <div class="container">
            <p class="typed"></p>
        </div>
    </div>
</template>
<script>
import Typed from 'typed.js';
export default {
    name:"downloud-five",
    mounted(){
         new Typed('.typed', {
  strings: ["thanks for using our website ... i hope you Enjoyed .. please rate us for improve us in feature", "thanks for using our website ... i hope you Enjoyed .. please rate us for improve us in feature"],
  typeSpeed: 60,
  loop:true,
  backSpeed:30
});
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


//--------------------------------------------------------------------------
.downloud-five{
    margin: 100px 0 0px;
    height: 160px;
    p{
        text-align: center;
        font-size: 30px;
        color: #6b4c5b;
       @include maxlarge{
                font-size: 24px;
            }
            @include maxmediam{
                font-size: 22px;
            }
            @include maxsmall{
                font-size: 18px;
            }
    }
}
</style>