<template>
  <div class='project-capture'>
    <div class='cover row collapse align-middle align-center'>
      <div class='image'
        :style='{ "background-image": `url(${ url })` }'>
      </div>
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
  width: 100%;
  height: 100%;
  
  .cover {
    width: 100%;
    height: 100%;
    background: get-color(teen-palenight);
    border-radius: 4px;
  }

  .image {
    width: 90%;
    height: 90%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>


