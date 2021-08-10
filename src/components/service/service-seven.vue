<template>
    <div class="service-seven">
        <div class="container">
            <div class="row">
                <div class="col-md-6" data-aos="fade-down">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1Dn05jKVkkFO-1pMcELzTKW1hPWU&hl=en" width="640" height="480"></iframe>
                </div>
                <div class="col-md-6" data-aos="fade-up">
                    <input type="text" placeholder="Your Name">
                    <input type="email" placeholder="Your Email">
                    <input type="text" placeholder="Your subject">
                    <textarea placeholder="Message"  cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-seven",
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
.service-seven{
    margin: 180px 0;
    .container .row > div:first-of-type{
        padding-right: 0;
        @include maxmobile{
               width: 90%;
               margin: auto;
            }
        iframe{
            width: 100%;
            height: 100%;
            @include maxsmall{
                height: 400px;
                margin-bottom: 10px;
            }
        }
    }
    .container .row > div:last-of-type{
        background-color: rgb(238, 238, 238);
        transform: scaleY(1.14);
        padding-top: 40px;
        @include maxsmall{
                transform: scaleY(1);
            }
        @include maxmobile{
               width: 90%;
               margin: auto;
            }
        input,textarea{
            width: 90%;
            display: block;
            margin: 10px auto;
            padding: 15px 10px;
            outline: none;
            border: 1px solid rgb(177, 177, 177);
            @include maxlarge{
                 padding: 10px;
            }
        }
        input:last-of-type{
            width: 220px;
            margin-left: 30px;
            background-color: #CA3F8A;
            border: 2px solid #CA3F8A;
            border-radius: 40px;
            padding: 8px 20px;
            color: white;
            font-size: 18px;
            transition: all .5s linear;
            @include maxlarge{
                 padding: 10px;
            }
            &:hover{
                background-color: #eee;
            color: #CA3F8A;
            }
        }
    }
}
</style>