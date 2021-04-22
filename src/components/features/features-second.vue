<template>

    <div class="features-second">
        <div class="container">
            <p>Great for companies with up to 100 employees.</p>
            <div class="mycard">
                <div class="row">
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/a.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Assign to others</h5>
    </div>
  </div>
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/aa.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Stay connected</h5>
    </div>
  </div>
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/aaa.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Powerful search</h5>
    </div>
  </div>
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/aaaa.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Put in a vault</h5>
    </div>
  </div>
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/aaaaa.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Fast messaging</h5>
    </div>
  </div>
  <div class="card col-md-4 col-6">
    <img src="@/assets/features/aaaaaa.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Share with others</h5>
    </div>
  </div>
</div>
</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"features-second",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@mixin maxtiny {
  @media (max-width: 350px) {
    @content;
  }
}




.features-second{
     overflow: hidden;
    padding: 100px 0 ;
    text-align: center;
    .container > p{
        font-size: 20px;
        font-family: 'Merriweather', serif;
        margin-bottom: 80px;
    }
    .container .mycard{
        .card{
              background-color: #F2F2F2;
            border: none;
            text-align: center;
            img{
                width: 30%;
                height: 100px;
                display: block;
                margin: auto;
                @include maxtiny{
                    width: 60%;
                }
            }
            .card-body{
                padding-top: 5px;
                 .card-title{
                color: #979797;
                font-family: 'New Tegomin', serif;
                @include maxtiny{
                 font-size: 15px;
                }
            }
            }
        }
    }
}
</style>