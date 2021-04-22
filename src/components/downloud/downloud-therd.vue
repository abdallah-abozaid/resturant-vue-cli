<template>
    <div class="downloud-therd">
        <div class="container">
            <p>Why choose us?</p>
            <p>Everyday we work hard to make life of our clients better and happier</p>
        <div class="row">
            <div class="col-md-5">
                <img src="@/assets/downloud/a.jpg" alt="">
            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-8">
                        <p>Quick response</p>
                        <p>Emergency response time is one hour or less guaranteed. A live person will answer your call, or you can enter a service ticket yourself .</p>
                    </div>
                    <div class="col-2">
                        <div class="icon"><fa-icon :icon="['fas','star']"/></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <p>Quick response</p>
                        <p>Emergency response time is one hour or less guaranteed. A live person will answer your call, or you can enter a service ticket yourself .</p>
                    </div>
                    <div class="col-2">
                        <div class="icon"><fa-icon :icon="['fas','comment-dots']"/></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <p>Quick response</p>
                        <p>Emergency response time is one hour or less guaranteed. A live person will answer your call, or you can enter a service ticket yourself .</p>
                    </div>
                    <div class="col-2">
                      <div class="icon"><fa-icon :icon="['fas','cog']"/></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"downloud-therd",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');
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
.downloud-therd{
    
        .container > p:first-of-type{
            font-size: 50px;
            text-align: center;
            font-family: 'Orelega One', cursive;
             @include maxmediam{
                          font-size:44px;
                    }
        }
        .container > p:last-of-type{
            text-align: center;
            color: gray;
            margin-bottom: 30px;
             @include maxmediam{
                          font-size:15px;
                    }
                    @include maxsmall{
                    margin-bottom: 10px;
                }
        }
        .container .row > div:first-of-type{
            padding-right: 0;
            img{
                width: 100%;
                height: 90%;
                @include maxsmall{
                    width: 50%;
                      height: 100%;
                    display: block;
                    margin: 0px auto;
                }
            }
        }
        .container .row > div:last-of-type{
            padding: 20px;
            .row:nth-of-type(2){
                background-color: rgb(230, 230, 230);
                .icon{
                    background-color: white;
                }
            }
            .row{
                padding: 20px;
                @include maxmediam{
                        padding: 10px;
                    }
                p:first-of-type{
                    font-size: 26px;
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    @include maxlarge{
                        font-size: 22px;
                    }
                    @include maxmediam{
                        margin-bottom: 10px;
                    }
                }
                p:last-of-type{
                    font-size: 18px;
                    color: gray;
                    @include maxlarge{
                        font-size: 15px;
                    }
                    @include maxmediam{
                        font-size: 13px;
                    }
                }
                .icon{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background-color: rgb(189, 189, 189);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg{
                        font-size: 30px;
                    }
                }
            }
        }
}
</style>