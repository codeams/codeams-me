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
  background: get-color(palenight);
  color: get-color(white);
}
</style>
