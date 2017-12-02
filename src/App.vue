<template>
  <viewport/>
</template>

<script>
import Viewport from '@/components/Viewport'

export default {
  components: {
    Viewport
  }
}
</script>

<style lang='scss'>
@import 'app';

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  width: 100%;
  height: 100%;
  background: get-color(palenight);
}
</style>
