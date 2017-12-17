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

// Include normalization styles
@import '~assets/style/normalize';

// Include transitions for the router view
@import '~assets/style/transitions';

.app {
  @include xy-grid-container(100%);
  height: 100vh;

  // TODO: Refactor. Extract and extend.
  //// Share with body.
  background-image: radial-gradient(
    farthest-corner at center right,
    from-palette(cello) 15%,
    from-palette(big-stone) 80%
  );
  color: from-palette(white);
}
</style>
