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
  background-image: radial-gradient(farthest-corner at center right, #3C465F 15%, #19213D 80%); // 3C465F, 19213D
  color: get-color(white);
}
</style>
