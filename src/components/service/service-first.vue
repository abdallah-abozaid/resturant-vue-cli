<template>
    <div class="service-first">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="@/assets/service/first.png" alt="">
                </div>
                <div class="col-md-6">
                   <p>WELCOME TO DIGILAB</p>
                   <p>We Are Digital Agency</p>
                   <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   <div>
                       <p class="num">0</p>
                        <p>YEARS OF EXPERIENCE</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-first",
    mounted(){
        var num=document.querySelector(".num");
        console.log(num.innerHTML)
        if(num.innerHTML == "0"){
       var interval= setInterval(function(){
            num.innerHTML=JSON.parse(num.innerHTML)+1
            if(num.innerHTML == "20"){
            clearInterval(interval)
        }
        },150);
        }

    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
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
.service-first{
    margin: 100px 0;
    .container .row > div:first-of-type{
        img{
            width: 100%;
            height: 100%;
            @include maxsmall{
                width: 70%;
                display: block;
                margin: auto;
            }
        }
    }
    .container .row > div:last-of-type{
        padding-top: 30px;
        font-family: 'Inter', sans-serif;
        @include maxsmall{
            padding-top: 10px;
        }
        > p:first-of-type{
            color: #ec294386;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: bold;
            margin-bottom: 5px;
            @include maxlarge{
                font-size: 15px;
            }
            @include maxmediam{
                font-size: 14px;
            }
            
        }
        > p:nth-of-type(2){
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
            @include maxlarge{
                font-size: 28px;
            }
            @include maxmediam{
                font-size: 25px;
            }
            @include maxsmall{
                margin-bottom: 3px;
            }
        }
        > p:nth-of-type(3),> p:nth-of-type(4){
            font-size: 16px;
            margin-bottom: 5px;
            color: gray;
            @include maxlarge{
                font-size: 15px;
            }
             @include maxmediam{
                font-size: 14px;
            }
             @include maxmobile{
                font-size: 12px;
            }
        }
        > div{
            margin-top: 20px;
            width: 300px;
            background-color: #ec2943;
            padding: 10px 0 5px 60px;
            transform: translateX(-130px);

            @include maxlarge{
                  padding: 8px 0 5px 50px;
                  margin-bottom: 20px;
                  font-size: 14px;
                  width: 270px;
            }
            @include maxmediam{
                padding: 8px 0 1px 40px;
                  margin-bottom: 20px;
                  font-size: 12px;
                  width: 250px;
                   transform: translateX(-90px);
            }
            @include maxsmall{
                margin-top: 3px;
                 transform: translateX(0px);
            }
            @include maxmobile{
                font-size: 12px;
                padding:7px 0 1px 30px;
            }
            p{
                color: white;
                letter-spacing: 2px;
            }
            p:first-of-type{
                margin-bottom: 5px;
                letter-spacing: 3px;
                font-size: 20px;
                 font-weight: bold;
                 @include maxmediam{
                  font-size: 17px;
            }
            }
        }
    }
}
</style>