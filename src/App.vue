<template>
  <div class='app'>
    <viewport>

    </viewport>
  </div>
</template>

<script>
import Viewport from '@/components/Viewport'

export default {
  name: 'app',

  components: {
    Viewport
  }
}
</script>

<style lang='scss'>
@import 'app';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
