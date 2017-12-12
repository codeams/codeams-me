<template>
  <div class='project-capture'>
    <div class='image'
      :style='{ "background-image": `url(${ url })` }'>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style lang='scss'>
.project-capture {
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: calc(100% * 0.865);
  border-radius: 4px;
  overflow: hidden;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
