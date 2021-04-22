<template>
    <div class="downloud-second">
        <div class="container">
            <div class="row">
                <div class="col-md-6 pad">
                    <p>Contact Us</p>
                    <p>Need Amazing Design?</p>
                    <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                    <input type="submit" value="Learn More">
                </div>
                <div class="col-md-6">
                    <div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card one">
        <div class="icon">
            <fa-icon :icon="['fas','cogs']"/>
        </div>
      <div class="card-body">
        <h5 class="card-title">Sample Headline</h5>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card two">
        <div class="icon">
            <fa-icon :icon="['fas','camera']"/>
        </div>
      <div class="card-body">
        <h5 class="card-title">Sample Headline</h5>
        <p >Sample text. Click to select the text box. Click again or double click to start editing the text</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card three">
          <div class="icon">
            <fa-icon :icon="['fas','briefcase']"/>
        </div>
      <div class="card-body">
        <h5 class="card-title">Sample Headline</h5>
        <p >Sample text. Click to select the text box. Click again or double click to start editing the text</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card four">
          <div class="icon">
            <fa-icon :icon="['fas','home']"/>
        </div>
      <div class="card-body">
        <h5 class="card-title">Sample Headline</h5>
        <p >Sample text. Click to select the text box. Click again or double click to start editing the text</p>
      </div>
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
    name:"downloud-second",
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
@keyframes coloring2{
    0%{
        background-color: #f11684;
    }
    25%{
        background-color: #510768;
    }
    50%{
        background-color: #724CDE;
    }
    75%{
        background-color: #2CCC62;
    }
    100%{
        background-color: #510768;
    }
}

//--------------------------------------------------------------------------
.downloud-second{
    background-image: url(~@/assets/downloud/aa.jpg);
    background-size: cover;
    padding: 100px 0;
    margin: 150px 0;
    
    .pad{
        padding-top: 6%;
        @include maxlarge{
                     padding-top: 6%;
                    }
                        @include maxmediam{
                   padding-top: 2%;
                }
    }
    .container .row > div:first-of-type{
        p:nth-of-type(1){
            font-size:20px;
            @include maxlarge{
                        font-size: 19px;
                    }
        }
        p:nth-of-type(2){
          font-family: 'Orelega One', cursive;
            font-size:55px;
            font-weight: 700;
            @include maxlarge{
                        font-size: 48px;
                    }
                     @include maxmediam{
                    font-size: 42px;
                }
        }
        p:nth-of-type(3){
            color: rgb(82, 82, 82);
            font-size: 18px;
            @include maxlarge{
                        font-size: 17px;
                    }
                      @include maxmediam{
                    font-size: 15px;
                }
        }
        input{
            border: none;
            padding: 12px 34px;
            border-radius: 30px;
            color: white;
            background-color: #f11684;
            animation: coloring2 5s linear infinite alternate;
                @include maxmediam{
                   padding: 8px 25px;
                }
                @include maxsmall{
                   margin-bottom: 30px;
                }
        }
    }
    .container .row > div:last-of-type{
        .one .icon{
                background-color: #5071F2;
        }
        .two {
         transform: translateY(-80px);
         @include maxsmall{
              transform: translateY(0px);
                }
        .icon{
                background-color: #2CCC62;
        }
        }
        .three .icon{
                background-color: #E7467F;
        }
        .four{
         transform: translateY(-80px);
         @include maxsmall{
              transform: translateY(0px);
                }
         .icon{
                background-color: #724CDE;
         }
        }
        .card{
            box-shadow: 2px 2px 10px rgb(192, 192, 192);
            .icon{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                text-align: center;
                margin: 30px auto 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                @include maxmediam{
                    width: 70px;
                height: 70px;
                }
                svg{
                    font-size: 40px;
                    @include maxmediam{
                      font-size: 36px;
                }
                    path{
                        fill:white
                    }
                }
            }
            .card-body{
                text-align: center;
                padding: 12px;
                @include maxlarge{
                    padding: 10px;
                }
                @include maxmediam{
                    padding: 7px;
                }
                h5{
                    font-size: 25px;
                    @include maxlarge{
                        font-size: 20px;
                    }
                    @include maxmediam{
                    font-size: 17px;
                }
                }
                p:last-of-type{
                    font-size: 17px;
                    color: gray;
                    @include maxlarge{
                        font-size: 14px;
                    }
                      @include maxmediam{
                      font-size: 12px;
                }
                }
            }
        }

    }
}
</style>