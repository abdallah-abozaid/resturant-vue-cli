<template>
  <div class="Features">
    <features-first/>
    <features-second/>
    <features-therd/>
    <features-four/>
    <features-five/>
    <thefooter/>
  </div>
</template>
<script>
import featuresFirst from '../components/features/features-first.vue'
import FeaturesFive from '../components/features/features-five.vue'
import FeaturesFour from '../components/features/features-four.vue'
import FeaturesSecond from '../components/features/features-second.vue'
import FeaturesTherd from '../components/features/features-therd.vue'
import Thefooter from '../components/myfooter/thefooter.vue'
export default {
  components: { featuresFirst, FeaturesSecond, FeaturesTherd, FeaturesFour, FeaturesFive, Thefooter },
  name:"features",
}
</script>
<style lang="scss">
.Features{
  background-color: #F2F2F2;
}
</style>
