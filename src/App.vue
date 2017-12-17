<template lang='pug'>
  .app
    heading
    transition(name='fade')
      router-view
    footing
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
// TODO: Check for performance and weight
//// of styles because of sass loader includes
//// in webpack utils configuration.

// Do NOT import/include vendor styles here.
// Use the app file:
@import 'app';

// General use styles
@import '~assets/style/normalize';
@import '~assets/style/transitions';

.app {
  @include xy-grid-container(100%);
  height: 100vh;

  background-image: radial-gradient(farthest-corner at center right, #3C465F 15%, #19213D 80%);
  color: get-color(white);
}
</style>
