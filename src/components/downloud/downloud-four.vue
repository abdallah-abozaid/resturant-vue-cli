<template>
    <div class="downloud-four">
        <div class="container">

        <p>How It Work</p>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div class="card-deck">
  <div class="card">
      <p>01</p>
    <div class="card-body">
      <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    </div>
  </div>
  <div class="card">
      <p>02</p>
    <div class="card-body">
      <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    </div>
  </div>
  <div class="card">
      <p>03</p>
    <div class="card-body">
      <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    </div>
  </div>
        </div>
        <a href="#">Read More</a>
</div>
    </div>
</template>
<script>
export default {
    name:"downloud-four",
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
.downloud-four{
    text-align: center;
    margin: 120px 0;
    .container > p:first-of-type{
        font-size: 50px;
        font-family: 'Orelega One', cursive;
        @include maxmediam{
                font-size: 45px;
            }
            @include maxsmall{
                font-size: 38px;
            }
    }
    .container > p:last-of-type{
        color: gray;
        margin-bottom: 30px;
        @include maxmediam{
                font-size: 15px;
            }
            @include maxsmall{
                font-size: 14px;
            }
    }
    .container a{
        margin-top: 40px;
        display: block;
        font-size: 20px;
        color: rgb(80, 79, 79);
        font-weight: 800;
        @include maxmediam{
                font-size: 15px;
            }
    }
    .container .card{
        border: none;
        position: relative;
        @include maxmobile{
            width: 50%;
            margin: auto;
            margin-bottom: 50px;
        }
        .card-body{
            @include maxsmall{
                padding: 0;
            }
        }
        .card-text{
            font-size: 20px;
            font-weight: 500;
            z-index: 11;
            @include maxlarge{
                font-size: 18px;
            }
            @include maxmediam{
                font-size: 15px;
            }
            @include maxsmall{
                font-size: 13px;
            }
        }
    }
    .card > p{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 160px;
    color: rgba(179, 179, 179, 0.308);
    z-index: 1;
    transform: translateY(-63px);
    font-weight: bold;
    @include maxsmall{
                font-size: 110px;
                transform: translateY(-49px);
            }
             @include maxmobile{
                  font-size: 90px;
                transform: translateY(-40px);
        }
    }
}
</style>