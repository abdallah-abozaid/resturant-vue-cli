<template>
    <div class="thefooter">
        <p>Get updates from Richard</p>
        <p>New course alerts, discounts and free lessons</p>
        <div class="inputs">
            <input type="text" placeholder="Enter Your Email">
            <input type="submit" value="Subscribe">
        </div>
        <img src="@/assets/about/logo2.png" alt="">
        <div class="container">
        <div class="row">
            <div class="col-md-2 col-4">
                <a href="#">Emai</a>
            </div>
            <div class="col-md-2 col-4">
                 <a href="#">Instagram</a>
            </div>
            <div class="col-md-2 col-4">
                 <a href="#">Facebook</a>
            </div>
            <div class="col-md-2 col-4">
                 <a href="#">Twitter</a>
            </div>
            <div class="col-md-2 col-4">
                 <a href="#">Image License Info</a>
            </div>
            <div class="col-md-2 col-4">
                 <a href="#">Powered by Webflow</a>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"thefooter",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
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

@keyframes scaling{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.1);
    }
}

//----------------------------------------------------------------------------------
.thefooter{
    background-color: rgb(44, 44, 44);
    color: white;
    text-align: center;
    padding: 80px 0;
    > p:first-of-type{
        font-size: 50px;
        font-family: 'Orelega One', cursive;
        @include maxmediam{
           font-size: 40px;
        }
        @include maxmobile{
               font-size: 30px;
        }
    }
    > p:nth-of-type(2){
        font-size: 15px;
        color: rgb(109, 109, 109);
        margin: 20px 0 40px;
        @include maxmobile{
               font-size: 13px;
        }
    }
    .inputs{
        width: 45%;
        margin: 0 auto 100px;
        @include maxlarge{
            width: 55%;
        }
        @include maxmediam{
            width: 70%;
        }
        @include maxmobile{
            width: 90%;
        }
        input:first-of-type{
            width: 70%;
            padding: 25px 0px 25px 20px;
        border: none;
        }
        input:last-of-type{
            width: 30%;
            padding: 25px 0px;
        border: none;
        background-color: #FC0A7E;
        color: white;
        &:hover{
            background-color: black;
            transition: all .5s linear;
        }
        }
    }
    > img{
        margin-bottom: 50px;
        animation: scaling 1s linear infinite alternate;
    }
    a{
        color: rgb(109, 109, 109);
         font-family: 'Orelega One', cursive;
         @include maxmobile{
               font-size: 15px;
        }
         &:hover{
             color: #FC0A7E;
         }
         
    }
    .container .row div{
        @include maxsmall{
             margin-bottom: 20px;
         }
    }
}
</style>