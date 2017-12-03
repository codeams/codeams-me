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

  background-color: get-color(teen-palenight);
  border-radius: 4px;

  .image {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
