<template>
  <div class='project'>
    <div class='cover row collapse align-middle align-center'>
      <div class='preview'
        :style='{ "background-image": `url(${ instance.previewUrl })` }'></div>
    </div>

    <div class='label'>
      <span class='name'>{{ instance.name }}</span>
      <span class='dash'> — </span>
      <span class='role'>{{ instance.role }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['instance']
}
</script>

<style lang='scss' scoped>
// TODO: Refactor to use dinamic height

.project {
  display: inline-block;
  width: 508px;
  margin-left: 15px;

  &:first-of-type {
    margin-left: 70px;
  }

  &:last-of-type {
    margin-right: 70px;
  }

  .cover {
    width: 100%;
    height: 431px;
    background: get-color(teen-palenight);
    border-radius: 4px;

    .preview {
      width: 90%;
      height: 90%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .label {
    margin-top: 27px;
    color: get-color(white);

    .name {
      font-weight: bold;
    }

    .role {
      font-style: italic;
    }
  }
}
</style>
