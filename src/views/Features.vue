<template>
  <div class="Features">
    <features-therd/>
    <features-four/>
    <features-five/>
    <thefooter/>
  </div>
</template>
<script>
import FeaturesFive from '../components/features/features-five.vue'
import FeaturesFour from '../components/features/features-four.vue'
import FeaturesTherd from '../components/features/features-therd.vue'
import Thefooter from '../components/myfooter/thefooter.vue'
export default {
  components: {   FeaturesTherd, FeaturesFour, FeaturesFive, Thefooter },
  name:"features",
}
</script>
<style lang="scss">
.Features{
  background-color: #F2F2F2;
}
</style>
