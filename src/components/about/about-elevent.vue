<template>
    <div class="about-elevent">
        <div class="first-com">
            <img src="@/assets/about/elevent.jpg" alt="" data-aos="zoom-in">
        </div>
        <div class="second-com">
            <div class="content" data-aos="flip-up">
                <p>Ready to get started?</p>
            <input type="submit" value="Download Now">
            <input type="submit" value="Get in Touch">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"about-elevent",
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
.about-elevent{
    .first-com{
        img{
            width: 100%;
            height: 450px;
        }
    }
    .second-com{
        height: 380px;
        background: linear-gradient(100deg, #D71172, #550a47);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .content{
            p{
                font-size: 40px;
                color: white;
                font-weight: bold;
                @include maxmobile{
                    font-size: 35px;
                }
            }
            input{
                padding: 20px 40px;
                margin: 5px;
                color: white;
                border: none;
                font-size: 19px;
                @include maxmobile{
                    padding: 15px 30px;
                    font-size: 16px;
                    margin-bottom: 0;
                }
                &:first-of-type{
                    background: #e9177c;
                    &:hover{
                        background-color: white;
                        color: black;
                        transition: all .5s linear;
                    }
                }
                &:last-of-type{
                    background: transparent;
                    border: 2px solid #af2095;
                    &:hover{
                        border-color: white;
                        transition: all .5s linear;
                    }
                }
            }
        }
        
    }
}
</style>