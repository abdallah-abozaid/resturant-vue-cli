<template>
    <div class="service-therd  overflow-hidden">
        <div class="container">
            <p data-aos="zoom-in-up">Only in <span>our restaurant</span></p>
            <div class="row">
                <!-- //------------------------------------------------------------ -->
                <div class="col-sm-5 col-md-4 big" data-aos="zoom-in-right">
                    <p class="title">OUR MENU</p>
                    <div class="item" @click="clicked($event)" data-num="one">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10 " ><p>Som tam:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="two">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10 "><p>Poutine:</p></div>
                        </div>
                    </div>
                    <div class="item"  @click="clicked($event)" data-num="three">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10"><p>Tacos:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="four">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10"><p>Buttered popcorn:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="five">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10"><p>Masala dosa:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="six">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10" ><p>Seafood paella:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="seven">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10" ><p>Marzipan:</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="eight">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/service/logo2.png" alt=""></div>
                            <div id="myp" class="col-10" ><p>Stinky tofu:</p></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------- -->
                <div class="col-sm-7 col-md-8 big" data-aos="zoom-out">
                    <div class="items-content">
                        <div class="content1 one">
                            <img src="@/assets/service/food1.jpg" alt="">
                            <p>Som tam</p>
                            <p>Inventore fugit error iure  illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content2 two">
                            <img src="@/assets/service/food2.jpg" alt="">
                            <p>Poutine</p>
                            <p>Inventore fisequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content3 three">
                            <img src="@/assets/service/food3.jpg" alt="">
                            <p>Tacos</p>
                            <p>reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content4 four">
                            <img src="@/assets/service/food4.jpg" alt="">
                            <p>Buttered popcorn</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content5 five">
                            <img src="@/assets/service/food5.jpg" alt="">
                            <p>Masala dosa</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobiue.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content6 six">
                            <img src="@/assets/service/food6.jpg" alt="">
                            <p>Seafood paella</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content6 seven">
                            <img src="@/assets/service/food7.jpg" alt="">
                            <p>Marzipan</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content6 eight">
                            <img src="@/assets/service/food8.jpg" alt="">
                            <p>Stinky tofu</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod  blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@1,500&display=swap');
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
@keyframes letterspac {
    0%{
        letter-spacing: 2px;
    }
    100%{
        letter-spacing: 5px;
    }
}
.big .title{
    text-align: center;
    font-weight: 700;
    animation: letterspac 1s linear infinite alternate;
}
.service-therd .container > p{
    margin-bottom: 50px;
    text-align: center;
    font-size: 45px;
    color: black;
}
.service-therd .container > p span{
    color: #CD1170;
}
.service-therd{
    margin: 150px 0 150px;
    color: white;
    @include maxsmall{
        margin-bottom: 600px;
    }
    .myinput{
        @include maxsmall{
        margin-bottom: 40px;
        
    }
          &:hover{
                            background: white!important;
                            color: #620F53!important;
                            font-weight: 700;
                        }
    }
    .container .row{
        .big:first-of-type{
            transform: scaleY(1.1);
            background:linear-gradient(45deg, #D71172, #620F53);
            padding-top: 20px;
            padding-bottom:20px;
            padding-left: 30px;
            @include maxmediam{
            }
            @include maxmobile{
                width: 80%;
                margin: auto;
            }
            .item.traingle{
                div p{
                   transition: all .7s linear;
                   color: rgb(207, 207, 207);
                   width: 100%;
                   height: 100%;
                  
                }
                &::after{
                    content: "";
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 50%;
                    right: -15px;
                    transform: translateY(-50%);
                    border-style: solid;
                    border-width: 15px;
                    border-color:transparent rgb(230, 230, 230) transparent transparent;
                    opacity: 1;
                    @include maxsmall{
                        opacity: 0;
                    }
                }
            }
            .item{
                margin-bottom: 0px;
                font-family: 'STIX Two Text', serif;
                font-size: 15px;
                border-bottom: 2px solid rgba(128, 128, 128, 0.356);
                position: relative;
                cursor: pointer;
                p{
                    padding-top: 15px;
                     @include maxlarge{
               margin-bottom: 0;
            }
            
                }
                &::after{
                    content: "";
                    width: 0;
                    height:0;
                    position: absolute;
                    top: 40%;
                    right: -15px!important;
                    transform: translateY(-50%);
                    border-style: solid;
                    border-width: 15px;
                    border-color:transparent rgb(230, 230, 230) transparent transparent;
                    opacity: 0;
                     @include maxmobile{
                         border-color:transparent #FFFFFF transparent transparent;
            }
                }
                &:hover::after{
                    opacity: 1;
                    transition: all .2s linear;
                }
                &:hover div p{
                   transform: scale(1.07);
                   transition: all .7s linear;
                }
                .row > div:first-of-type{
                    padding-top: 0px;
                    padding-right: 0;
                    @include maxlarge{
                            padding: 5px;
                        }
                    @include maxsmall{
                            height: 40px;
                            margin-bottom: 10px;
                        }
                    img{
                        width: 100%;
                        height: 100%;
                        @include maxsmall{
                           width: 70%;
                        }
                    }
                }
            }
        }
        .big:last-of-type{
            padding-left: 0;
            background-color: rgb(230, 230, 230);
            position: relative;
            @include maxmobile{
                width: 90%;
                margin: auto;
            }
            .items-content{
                color: black;
                & > div{
                 transition: all .6s linear;
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
                padding-left:70px;
                padding-top: 50px;
                padding-right: 20px;
                 background-color: rgb(230, 230, 230);
                 @include maxlarge{
                     padding-left:50px;
                padding-top: 30px;
                padding-right: 10px;
                 }
                 @include maxmediam{
                     padding-left:30px;
                 }
                    img{
                        width: 300px;
                        height: 170px;
                        border-radius: 10px;
                        border: 1px solid grey;
                        box-shadow: 1px 1px 8px grey;
                        margin-bottom: 10px;
                            @include maxlarge{
                        width: 250px;
                    }
                            @include maxmediam{
                        width: 200px;
                    }
                    }
                    p:first-of-type{
                        font-size: 32px;
                        font-family: 'STIX Two Text', serif;
                             @include maxlarge{
                        font-size: 27px;
                    }
                    }
                    p:nth-of-type(2){
                        color: gray;
                        font-size:15px;
                        padding-right:10% ;
                        margin-bottom: 40px;
                      @include maxmediam{
                        font-size:11px;
                        margin-bottom: 10px;
                    }
                    }
                    input{
                        color: white;
                        background:linear-gradient(45deg, #D71172, #620F53);
                        padding: 7px 27px;
                        border-radius: 40px;
                        border: 2px solid #620F53;
                            transition: all .2s linear!important;
                       @include maxlarge{
                        padding: 10px 20px;
                    }
                     @include maxmediam{
                        font-size:13px;
                          padding: 5px 10px;
                          border: 1px solid #620F53;
                    }
                    }
                }
                .content2,.content3,.content4,.content5,.content6{
                    display: none;
                }
            }
        }
    }
}
</style>
<script>
export default {
    name:"service-therd",
    mounted(){
        var firstitem=document.querySelector(".big:first-of-type .item:first-of-type");
        firstitem.classList.add("traingle");
    },
    methods:{
        clicked:function(event){
            var parent=event.target.parentElement.parentElement.parentElement;
            var allitems=document.querySelectorAll(".big:first-of-type .item");
            for(let i=0;i<allitems.length;i++){
                allitems[i].classList.remove("traingle");
            }
           parent.classList.add("traingle");
           console.log(event.target)
            var myelem=document.querySelectorAll(".items-content div");
            for(let i=0;i<myelem.length;++i){
                myelem[i].style.display="none"
            }
            document.querySelector("."+parent.getAttribute("data-num")).style.display="block"






        }
    }
}
</script>