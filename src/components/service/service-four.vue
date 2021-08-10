<template>
    <div class="service-four">
        <div class="container">
            <p data-aos="zoom-in-down">OUR  <span style="color:#CD1170">Manegers</span></p>
            <p data-aos="zoom-in-down">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div class="staffs">
                <div class="row">
                <div class="staf col-6 col-md-3" data-aos="zoom-in">
                    <img src="@/assets/service/a.jpg" alt="">
                    <p>Alicia Henderson</p>
                    <p>restaurant manager</p>
                    <div class="icons">
                       <a href="#"> <fa-icon :icon="['fab','twitter']"/></a>
                       <a href="#"><fa-icon :icon="['fab','google-plus-g']"/></a>
                       <a href="#">  <fa-icon :icon="['fab','instagram']"/></a>
                    </div>
                    </div>
                <div class="staf col-6 col-md-3" data-aos="zoom-in-up">
                    <img src="@/assets/service/aa.jpg" alt="">
                    <p>Alicia Henderson</p>
                    <p>head Reservation Services</p>
                    <div class="icons">
                        <a href="#"> <fa-icon :icon="['fab','twitter']"/></a>
                       <a href="#"><fa-icon :icon="['fab','facebook-f']"/></a>
                       <a href="#"><fa-icon :icon="['fab','google-plus-g']"/></a>
                       <a href="#">  <fa-icon :icon="['fab','instagram']"/></a>
                    </div>
                    </div>
                <div class="staf col-6 col-md-3" data-aos="zoom-in">
                    <img src="@/assets/service/aaa.jpg" alt="">
                    <p>Alicia Henderson</p>
                    <p>Head chef</p>
                    <div class="icons">
                        <a href="#"> <fa-icon :icon="['fab','twitter']"/></a>
                       <a href="#"><fa-icon :icon="['fab','facebook-f']"/></a>
                    </div>
                    </div>
                <div class="staf col-6 col-md-3" data-aos="zoom-in-up">
                    <img src="@/assets/service/aaaa.jpeg" alt="">
                    <p>Alicia Henderson</p>
                    <p>head waiters</p>
                    <div class="icons">
                        <a href="#"> <fa-icon :icon="['fab','twitter']"/></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-four",
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
.service-four{
    margin: 100px 0;
    text-align: center;
    .container{
        & > p:first-of-type{
            font-size: 50px;
            @include maxmediam{
                  font-size: 43px;
            }
        }
        & > p:nth-of-type(2){
            color: gray;
            width: 50%;
            margin: 0 auto 50px;
            @include maxlarge{
                margin-bottom: 20px;
            }
            @include maxmediam{
                width: 70%;
                font-size: 15px;
            }
        }
        .staf{
            @include maxsmall{
                margin-bottom: 40px;
            }
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-bottom: 15px;
                @include maxsmall{
                margin-bottom: 7px;
            }
            }
            p:first-of-type{
                font-size: 23px;
                margin-bottom: 4px;
                @include maxlarge{
                font-size: 21px;
            }
            @include maxmediam{
                font-size: 18px;
            }
            @include maxsmall{
                margin-bottom: 7px;
            }
            }
            p:last-of-type{
                color: #83105C;
                font-size: 15px;
            @include maxmediam{
                font-size: 13px;
            }
            @include maxsmall{
                margin-bottom: 7px;
            }
            }
            .icons{
                a{
                    margin: 5px;
                    color: black;
                }
                a:nth-of-type(1){
                    svg path{
                        fill:#1DA1F2
                    }
                }
                a:nth-of-type(2){
                    svg path{
                        fill:#4267B2

                    }
                }
                a:nth-of-type(3){
                    svg path{
                        fill:black
                    }
                }
                a:nth-of-type(4){
                    svg path{
                        fill:#D60048
                    }
                }
            }
        }
    }
}
</style>