<template>
    <div class="service-therd">
        <div class="container">
            <div class="row">
                <!-- //------------------------------------------------------------ -->
                <div class="col-md-4 big">
                    <div class="item" @click="clicked($event)" data-num="one">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/a.svg" alt=""></div>
                            <div id="myp" class="col-10 " ><p>Business Strategy</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="two">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/aa.svg" alt=""></div>
                            <div id="myp" class="col-10 "><p>Research</p></div>
                        </div>
                    </div>
                    <div class="item"  @click="clicked($event)" data-num="three">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/aaa.svg" alt=""></div>
                            <div id="myp" class="col-10"><p>Data Analysis</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="four">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/aaaa.svg" alt=""></div>
                            <div id="myp" class="col-10"><p>UI Design</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="five">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/aaaaa.svg" alt=""></div>
                            <div id="myp" class="col-10"><p>UX Design</p></div>
                        </div>
                    </div>
                    <div class="item" @click="clicked($event)" data-num="six">
                        <div class="row">
                            <div class="col-2"><img src="@/assets/features/aaaaaa.svg" alt=""></div>
                            <div id="myp" class="col-10" ><p>Technology</p></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------- -->
                <div class="col-md-8 big">
                    <div class="items-content">
                        <div class="content1 one">
                            <img src="@/assets/features/a.svg" alt="">
                            <p>Business Strategy</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content2 two">
                            <img src="@/assets/features/aa.svg" alt="">
                            <p>Research</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content3 three">
                            <img src="@/assets/features/aaa.svg" alt="">
                            <p>Data Analysis</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content4 four">
                            <img src="@/assets/features/aaaa.svg" alt="">
                            <p>UI Design</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content5 five">
                            <img src="@/assets/features/aaaaa.svg" alt="">
                            <p>UX Design</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                        <div class="content6 six">
                            <img src="@/assets/features/aaaaaa.svg" alt="">
                            <p>Technology</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                            <input type="submit" value="Learn More" class="myinput">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
                            background-color: white!important;
                            color: #EC2943!important;
                            transition: all .5s linear!important;
                            border-color: #EC2943!important;
                            font-weight: 700!important;
                            letter-spacing: 4px;
                        }
    }
    .container .row{
        .big:first-of-type{
            transform: scaleY(1.1);
            background-color: #EC2943;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 30px;
            @include maxlarge{
                padding-top: 40px;
            padding-bottom: 80px;
            padding-left: 20px;
            }
            @include maxmediam{
                padding-top: 30px;
            padding-bottom: 80px;
            padding-left: 30px;
            }
            @include maxsmall{
                padding-top: 20px;
            padding-bottom:40px;
            padding-left: 30px;
            }
            .item.traingle{
                div p{
                   transform: scale(1.07);
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
                    top: 40%;
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
                margin-bottom: 25px;
                font-size: 20px;
                position: relative;
                cursor: pointer;
                     @include maxlarge{
                margin-bottom:15px;
            }
                     @include maxsmall{
                margin-bottom:5px;
            }
                p{
                    
                     @include maxlarge{
               font-size: 17px;
               margin-bottom: 0;
                    padding-top: 15px;
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
                    @include maxlarge{
                            padding: 5px;
                        }
                    @include maxsmall{
                            height: 40px;
                            margin-bottom: 10px;
                        }
                    img{
                        width: 100%;
                        @include maxsmall{
                           width: 70%;
                           height: 100%;
                        }
                    }
                }
            }
        }
        .big:last-of-type{
            padding-left: 0;
            background-color: rgb(230, 230, 230);
            position: relative;
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
                        width: 200px;
                            @include maxlarge{
                        width: 150px;
                    }
                            @include maxmediam{
                        width: 100px;
                    }
                    }
                    p:first-of-type{
                        font-size: 35px;
                             @include maxlarge{
                        font-size: 30px;
                    }
                    }
                    p:nth-of-type(2),p:nth-of-type(3){
                        color: gray;
                      @include maxlarge{
                        font-size:15px;
                    }
                    }
                    input{
                        color: white;
                        background-color: #EC2943;
                        padding: 15px 30px;
                        border-radius: 40px;
                        border: 2px solid #EC2943;
                       @include maxlarge{
                        padding: 10px 20px;
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