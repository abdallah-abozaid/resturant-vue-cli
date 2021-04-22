<template>
    <div class="service">
     <service-first/>
     <service-second/>
     <service-therd/>
     <service-four/>
     <service-five/>
     <service-six/>
     <service-seven/>
     <thefooter/>
    </div>
</template>
<style lang="scss">

</style>
<script>
import Thefooter from '../components/myfooter/thefooter.vue'
import serviceFirst from '../components/service/service-first.vue'
import ServiceFive from '../components/service/service-five.vue'
import ServiceFour from '../components/service/service-four.vue'
import ServiceSecond from '../components/service/service-second.vue'
import ServiceSeven from '../components/service/service-seven.vue'
import ServiceSix from '../components/service/service-six.vue'
import ServiceTherd from '../components/service/service-therd.vue'
export default {
  components: { serviceFirst, ServiceSecond, ServiceTherd, ServiceFour, ServiceFive, ServiceSix, ServiceSeven, Thefooter },
    name:"service",
}
</script>