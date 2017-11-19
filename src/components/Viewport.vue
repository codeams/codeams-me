<template>
  <div class='viewport'>
    <heading></heading>
    <frame>
      Frame
    </frame>
    <footing></footing>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Frame from '@/components/Frame'
import Footing from '@/components/Footing'

export default {
  name: 'Viewport',

  data () {
    return {}
  },

  components: {
    Heading,
    Frame,
    Footing
  }
}
</script>

<style lang='scss'>
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
