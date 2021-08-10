<template>
    <div class="service-six">
        <div class="container">
            <p data-aos="zoom-in-down"> <span style="color:#CD1170">CONTACT</span> US</p>
            <p data-aos="zoom-in-down">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div class="cards">

<div class="row row-cols-1 row-cols-md-3">
  <div class="col-md-3 col-sm-6" data-aos="flip-left">
    <div class="card h-100">
      <div class="icon"><fa-icon :icon="['fas','street-view']"/></div>
    <div class="card-body">
      <h5 class="card-title">ADDRESS</h5>
      <p class="card-text">198 West 21th Street, Suite 721 New York NY 10016</p>
    </div>
    </div>
  </div>
  <div class="col-md-3 col-sm-6" data-aos="flip-left">
    <div class="card h-100">
       <div class="icon"><fa-icon :icon="['fas','phone-alt']"/></div>
    <div class="card-body">
      <h5 class="card-title">CONTACT NUMBER</h5>
      <p class="card-text"> + 1235 2355 98</p>
    </div>
    </div>
  </div>
  <div class="col-md-3 col-sm-6" data-aos="flip-left">
    <div class="card h-100">
      <div class="icon"><fa-icon :icon="['fab','telegram-plane']"/></div>
    <div class="card-body">
      <h5 class="card-title">EMAIL ADDRESS</h5>
      <p class="card-text">abdallah-resurant@gmail.com</p>
    </div>
    </div>
  </div>
  <div class="col-md-3 col-sm-6" data-aos="flip-left">
    <div class="card h-100">
       <div class="icon"><fa-icon :icon="['fas','globe-americas']"/></div>
    <div class="card-body">
      <h5 class="card-title">WEBSITE</h5>
      <p class="card-text">abdallah_resturant.com</p>
    </div>
    </div>
  </div>
</div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-six",
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
@keyframes rotating{
    0%{
        transform: rotate(-10deg);
    }
   
    50%{
          transform: rotate(0deg);
    }
    
    100%{
      transform: rotate(10deg);
    }
}


//----------------------------------------------------------------------------------
.service-six{
    text-align: center;
    margin: 100px 0;
    .container > p:first-of-type{
        font-size: 50px;
        @include maxlarge{
            font-size: 45px;
        }
    }
    .container > p:last-of-type{
        color: gray;
        margin-bottom: 40px;
    }
    .cards {
        & > div > div{
            @include maxsmall{
                        margin-bottom: 30px;
                    }
        }
        & > div{
            
            @include maxmobile{
                        width: 70%;
                        margin: auto;
                    }
        }
        .card{
            margin-bottom: 10px;
            border: none;
            color: grey;
            transition: all .6s linear;
            @include maxmediam{
                        padding: 0px;
                    }
            
            .icon {
                width: 80px;
                height: 80px;
                background-color: #aeaeae7a;
                border-radius: 50%;
                margin: 20px auto;
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;
                @include maxmediam{
                        width: 80px;
                height: 80px;
                    }
                svg{
                    font-size: 50px;
                     animation: rotating 2s linear infinite alternate ;
                    @include maxlarge{
                        font-size: 44px;
                    }
                    @include maxmediam{
                        font-size: 42px;
                    }
                }
            }
            .card-body{
              padding:0 7px;
                h5{
                  margin-bottom: 4px;
                  color: black;
                    @include maxlarge{
                        font-size: 18px;
                    }
                    @include maxmediam{
                        font-size: 15px;
                    }
                    }
                    p{
                      font-size: 14px;
                    }
            }
        }
    }
}
</style>