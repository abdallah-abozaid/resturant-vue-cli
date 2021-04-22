<template>
    <div class="about-six">
        <div class="container">
        <div class="card-deck">
  <div class="card">
    <img src="@/assets/about/one.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Activity Notifications</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  </div>
  <div class="card">
    <img src="@/assets/about/three.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Custom Timing</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  </div>
  <div class="card">
    <img src="@/assets/about/two.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Mobile Optimized</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  </div>
</div>
</div>
    </div>
</template>
<script>
export default {
    name:"about-six"
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
.about-six{
    margin-top: 120px;
    margin-bottom: 80px;
    .card-deck .card{
        border: none;
        text-align: center;
        img{
            width: 100px;
            height: 100px;
            display: block;
            margin: auto;
            margin-bottom: 20px;
             @include maxsmall{
                     width: 70px;
            height:70px;
            margin-bottom: 10px;
                }
                @include maxmobile{
                    margin-bottom: 0px;
                }
        }
        .card-body{
            @include maxmobile{
                    padding-top: 5px;
                }
            .card-text{
                color: #6b6b6b;
                @include maxmediam{
                    font-size: 13px;
                }
                @include maxsmall{
                    font-size: 12px;
                }
            }
            .card-title{
                 @include maxsmall{
                     font-size: 18px;
                      margin-bottom: 5px;
                }
                @include maxmobile{
                    margin-bottom: 0px;
                }
            }
        }
    }
}
</style>