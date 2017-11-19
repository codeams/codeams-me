<template>
  <div class='footing'>
    <span class='copyright-notice'>&copy;{{ currentYear }}</span>
  </div>
</template>

<script>
export default {
  name: 'Footing',

  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style lang='scss'>
  .footing {
    z-index: 99;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 40px 0 40px 70px;

    .copyright-notice {
      color: get-color(baby-palenight);
    }
  }
</style>
