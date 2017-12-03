<template>
  <div class='project-capture'
    :style='{ "background-image": `url(${ url })` }'>
  </div>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style lang='scss'>
.project-capture {
  width: 100%;
  height: 0px;
  padding-top: calc(100% * 0.865);

  background-repeat: no-repeat;
  background-position: center;
  background-size: 90% 90%;
  background-color: get-color(teen-palenight);

  border-radius: 4px;
}
</style>
