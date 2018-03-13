<template lang='pug'>
    router-link.project-preview(:to="`/project/${project.id}`" tag='div')
      .capture-container
        project-capture(:capture='project.cover' actionable)
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

  // Override cell width
  width: calc(100vw - 30px);
  padding-bottom: 30px;
  cursor: pointer;

  @include breakpoint(large) {
    width: 508px;
    padding-bottom: 0;
  }

  .capture-container {
    width: 100%;

    @include breakpoint(large) {
      // TODO: Check if this is actually necessary
      height: 431px;
    }
  }

  .label {
    margin-top: 27px;
    font-style: italic;
  }
}
</style>
