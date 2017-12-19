<template lang='pug'>
  .project-captures-list
    .captures-slider
      .captures-grid
        .capture-container(
          v-for='capture in project.captures'
          :key='capture.id'
        )
          project-capture(:src='capture')
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

<style lang='scss'>
.project-captures-list {
  @include xy-grid(vertical);
  @include xy-grid-frame(vertical, nested);
  @include flex-align($x: center);
  
  max-width: 100%;
}

.captures-slider {
  @include xy-cell-block-container;

  padding-top: 140px;
  padding-bottom: 60px;
}

.captures-grid {
  @include xy-grid(vertical, $wrap: false);
}

.capture-container {
  @include xy-cell(
    $size: shrink,
    $gutter-output: true,
    $gutter-position: top bottom
  );
  @include xy-cell-block($vertical: true);
}
</style>
