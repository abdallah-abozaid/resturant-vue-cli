<template>
    <div class="downloud-first">
        <div class="container">
            <p data-aos="fade-down"> <span style="color:#CD1170">downloud</span> My App</p>
            <p data-aos="fade-down">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            <div class="row">
                <div class="col-md-6 fst" data-aos="fade-right">
                    <p>Basic</p>
                    <p>$19.99</p>
                    <p>5 Users</p>
                    <p>20 Projects</p>
                    <input type="submit" value="Order Now">
                </div>
                <div class="col-md-6 sec" data-aos="fade-left">
                    <p>Professional</p>
                    <p>$199.99</p>
                    <p>100 Users</p>
                    <p>100 Projects</p>
                    <input type="submit" value="Order Now">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"downloud-first",
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
@keyframes coloring{
    0%{
        background-color: #9e45b9;
    }
    100%{
        background-color: #510768;
    }
}

//----------------------------------------------------------------------------------

.downloud-first{
    text-align: center;
    margin:50px 0;
    .container > p:first-of-type{
        font-size: 50px;
        font-family: 'Orelega One', cursive;
        @include maxmediam{
            font-size: 40px;
        }
        @include maxsmall{
            font-size: 35px;
        }
    }
    .container > p:last-of-type{
        color: gray;
        width: 60%;
        margin: auto;
        margin-bottom: 50px;
        @include maxmediam{
            width: 75%;
        }
        @include maxsmall{
            font-size: 14px;
            width: 90%;
        }
    }
    .container .row{
        .fst{
            background-color: rgb(224, 224, 224);
            padding: 20px;
            z-index: 2;
            @include maxsmall{
                padding-bottom: 50px;
            }
            
        }
        .sec{
            background-color: #731058;
            color: white;
            padding: 20px;
            z-index: 1;
            p:nth-of-type(3),p:nth-of-type(4){
                color: rgb(182, 182, 182);
            }
            transform: scale(1.15) translateX(-40px);
            @include maxsmall{
               transform: scale(1.15) translateY(-30px);
               padding-top: 60px;
            }
        }
        div{
            @include maxmobile{
                width: 80%;
                margin: auto;
            }
            p:first-of-type,p:nth-of-type(2){
                font-size: 35px;
                font-weight: 600;
                        @include maxmediam{
                font-size: 30px;
                }
            }
            p:nth-of-type(3),p:nth-of-type(4){
                font-size: 15px;
                color: rgb(54, 54, 54);
                margin-bottom: 1px;
                 @include maxmediam{
                font-size: 14px;
                }
            }
            input{
                border: none;
                padding: 11px 30px;
                color: white;
                border-radius: 4px;
                font-weight: bold;
                margin-top: 30px;
                animation: coloring 2s linear infinite alternate;
                &:hover{
                    background-color: white!important;
                    color: #510768;
                    border-radius: 20px;
                    animation-play-state: paused;
                    transition: all .5s linear;
                }
                @include maxmediam{
                 padding: 8px 20px;
                }
            }
        }
    }
}
</style>