<template lang='pug'>
    router-link.project-preview(:to="`/project/${project.id}`" tag='div')
      .capture-container
        project-capture(:src='project.cover' clickable)
      .label
        strong.name {{ project.name }}
        span.dash &nbsp;—&nbsp;
        span.role {{ project.role }}
</template>

<script>
import Project from '@/models/Project'
import ProjectCapture from '@/components/Project-capture'

export default {
  components: {
    ProjectCapture
  },

  props: {
    project: {
      type: Project,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
// TODO: Refactor to use dinamic height

.project-preview {
  @include xy-cell(
    $size: shrink,
    $gutter-output: true
  );
  @include xy-cell-block;

  // Override cell width
  width: 508px;

  .capture-container {
    width: 100%;
    height: 431px;
  }

  .label {
    margin-top: 27px;
    font-style: italic;
  }
}
</style>
