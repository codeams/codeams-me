<template>
  <div class='project'>
    <div class='capture-container'>
      <project-capture :url='instance.previewUrl' />
    </div>

    <div class='label'>
      <span class='name'>{{ instance.name }}</span>
      <span class='dash'> — </span>
      <span class='role'>{{ instance.role }}</span>
    </div>
  </div>
</template>

<script>
import ProjectCapture from '@/components/Project-capture'

export default {
  props: ['instance'],

  components: {
    ProjectCapture
  }
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

  .capture-container {
    width: 100%;
    height: 431px;
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
