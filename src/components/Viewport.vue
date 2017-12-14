<template>
  <div class='viewport'>
    <heading/>
    <transition name='fade'>
      <router-view/>
    </transition>
    <footing/>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Footing from '@/components/Footing'

export default {
  components: {
    Heading,
    Footing
  }
}
</script>

<style lang='scss'>
@import '~assets/style/transitions';

.viewport {
  // Sizing
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // Styling
  // background: get-color(palenight);
  /* Rectangle 2: */
  /* Rectangle 2: */
  background-image: radial-gradient(farthest-corner at 0px 0px, #323459 0%, #16182B 100%);
  color: get-color(white);
}
</style>
