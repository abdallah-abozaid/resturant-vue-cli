<template>
    <div class="features-five">
        <div class="container">
            <p>Mentioned in</p>
            <img src="@/assets/features/last.svg" alt="" data-aos="flip-up">
        </div>
    </div>
</template>
<script>
export default {
    name:"features-five",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.features-five{
    padding: 100px 0;
    overflow: hidden;
    .container{
        p{
            text-align: center;
            font-size: 20px;
            font-family: 'Lobster', cursive;
            margin-bottom: 30px;
        }
        img{
            width: 90%;
            display: block;
            margin: auto;
        }
    }
}
</style>