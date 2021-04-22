<template>
    <div class="downloud">
        <downloud-first/>
        <downloud-second/>
        <downloud-therd/>
        <downloud-four/>
        <downloud-five/>
        <thefooter/>
    </div>
</template>
<style lang="scss">

</style>
<script>
import downloudFirst from '../components/downloud/downloud-first.vue'
import DownloudFive from '../components/downloud/downloud-five.vue'
import DownloudFour from '../components/downloud/downloud-four.vue'
import DownloudSecond from '../components/downloud/downloud-second.vue'
import DownloudTherd from '../components/downloud/downloud-therd.vue'
import Thefooter from '../components/myfooter/thefooter.vue'
export default {
  components: { downloudFirst, DownloudSecond, DownloudTherd, DownloudFour, Thefooter, DownloudFive },
    name:"downloud",
}
</script>