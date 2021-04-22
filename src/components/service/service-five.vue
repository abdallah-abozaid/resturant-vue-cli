<template>
    <div class="service-five">
        <div class="container">
            <p>OUR BLOG</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
        <div class="absolut">
            <div class="row">
                <div class="col-6">12</div>
                <div class="col-6"><p>2019</p><p>March</p></div>
            </div>
        </div>
      <img src="@/assets/service/i.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Why Lead Generation is Key for Business Growth</h5>
        <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>
      <div class="last">
          <input type="submit" value="Read More">
          <span>Admin <fa-icon :icon="['fas','comment-dots']"/> 3</span>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
        <div class="absolut">
            <div class="row">
                <div class="col-6">10</div>
                <div class="col-6"><p>2019</p><p>March</p></div>
            </div>
        </div>
      <img src="@/assets/service/iiii.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Why Lead Generation is Key for Business Growth</h5>
        <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>
      <div class="last">
          <input type="submit" value="Read More">
          <span>Admin <fa-icon :icon="['fas','comment-dots']"/> 3</span>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
        <div class="absolut">
            <div class="row">
                <div class="col-6">05</div>
                <div class="col-6"><p>2019</p><p>March</p></div>
            </div>
        </div>
      <img src="@/assets/service/ii.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Why Lead Generation is Key for Business Growth</h5>
        <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>
      <div class="last">
          <input type="submit" value="Read More">
          <span>Admin <fa-icon :icon="['fas','comment-dots']"/> 3</span>
      </div>
    </div>
  </div>
  
</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-five",
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
.service-five{
    margin: 150px 0;
    .container > p:first-of-type{
        font-size: 45px;
        text-align: center;
    }
    .container > p:last-of-type{
       color: gray;
        text-align: center;
        margin-bottom: 30px;
    }
    .card{
        border: none;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        @include maxsmall{
            width: 80%;
            margin: 10px auto ;
        }
        &:hover {
            box-shadow: 2px 2px 15px gray;
            cursor: pointer;
            border-top-left-radius: 40px;
            h5{
            color: #EC2943;
            transition: all .6s linear;
        }
        .last input{
            background-color: white;
            color: #EC2943;
            border: 2px solid #EC2943;
            transition: all .6s linear;
        }
        
        }
        .absolut{
            position:absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 70px;
            background-color: #EC2943;
            color: white;
            @include maxmediam{
                   width: 130px;
            height: 60px; 
                }
            .row > div:first-of-type{
                font-size: 50px;
                padding: 0;
                text-align: center;
                 @include maxmediam{
                   font-size: 38px;
                   padding-right: 5px;
                   text-align: right; 
                }
            }
            .row > div:last-of-type{
                 padding: 0;
                 padding-top: 13px;
                p{
                    margin-bottom: 0px;
                   @include maxmediam{
                   font-size: 14px; 
                   
                }
                }
            }
        }
        img{
            height: 280px;
            @include maxlarge{
                  height: 250px;  
                }
        }
        .card-body{
            padding-left: 5px;
            h5{
                @include maxmediam{
                font-size: 16px;  
                }
            }
            p:last-of-type{
                font-size: 15px;
                color: gray;
                @include maxmediam{
                font-size: 13px;  
                }
            }
        }
        .last{
            span{
                text-align: right;
                width: 60%;
                display: inline-block;
                @include maxlarge{
                    width: 50%;  
                }
                @include maxmediam{
                     width: 33%; 
                     font-size: 12px;  
                }
                @include maxsmall{
            width: 70%;
        }
                @include maxtiny{
            width: 50%;
        }
            }
            input{
                border: none;
                border-radius: 20px;
                background-color: #EC2943;
                color: white;
                padding: 8px 18px;
                border: 2px solid #EC2943;
                margin: 5px;
                @include maxlarge{
                  padding: 5px 15px;  
                }
                @include maxmediam{
                     padding: 3px 10px;
                     font-size: 14px;  
                }
            }
        }
    }
}
</style>