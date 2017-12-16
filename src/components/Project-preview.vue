<template lang='pug'>
  .project-preview
    .capture-container
      project-capture(clickable :url='project.cover')
    .label
      span.name {{ project.name }}
      span.dash &nbsp;—&nbsp;
      span.role {{ project.role }}
</template>

<script>
import ProjectCapture from '@/components/Project-capture'

export default {
  props: ['project'],

  components: {
    ProjectCapture
  }
}
</script>

<style lang='scss' scoped>
// TODO: Refactor to use dinamic height

.project-preview {
  display: inline-block;
  width: 508px;
  margin-left: 25px;

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
    font-style: italic;
    color: get-color(white);

    .name {
      font-weight: bold;
    }
  }
}
</style>
