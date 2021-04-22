<template>
  <div class="about">
    <about-first/>
    <about-second/>
    <about-therd/>
    <about-four/>
    <about-five/>
    <about-six/>
    <about-seven/>
    <about-eight/>
    <about-nine/>
    <about-ten/>
    <about-elevent/>
    <thefooter/>
  </div>
</template>

<script>
import AboutEight from '../components/about/about-eight.vue';
import AboutElevent from '../components/about/about-elevent.vue';
import aboutFirst from '../components/about/about-first.vue';
import AboutFive from '../components/about/about-five.vue';
import AboutFour from '../components/about/about-four.vue';
import AboutNine from '../components/about/about-nine.vue';
import aboutSecond from '../components/about/about-second.vue';
import AboutSeven from '../components/about/about-seven.vue';
import AboutSix from '../components/about/about-six.vue';
import AboutTen from '../components/about/about-ten.vue';
import AboutTherd from '../components/about/about-therd.vue';
import Thefooter from '../components/myfooter/thefooter.vue';
// @ is an alias to /src

export default {
  name: "about",
  components: { aboutFirst,aboutSecond, AboutTherd, AboutFour, AboutFive, AboutSix, AboutSeven, AboutEight, AboutNine, AboutTen, AboutElevent, Thefooter },
  
};
</script>
