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

// Include app.scss into the bundle
@import 'app';

@import '~assets/style/transitions';

.app {
  @extend .gradient-background;
  @include xy-grid-container(100%);

  height: 100vh;
  color: from-palette(white);
}
</style>
