<template lang='pug'>
  .project-captures-list
    .captures-slider
      .captures-grid
        .capture-container(
          v-for='capture in project.captures'
          :key='capture.source'
        )
          project-capture(:capture='capture')
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

  padding-bottom: 60px;

  @include breakpoint(large) {
    padding-top: calc(100% * 0.04228);

    transform: translateY(-150px);
    animation-name: slide-down;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
}

.captures-grid {
  @include xy-grid(vertical, $wrap: false);
  padding: 0 20px;

  @include breakpoint(large) {
    padding: 0;
  }
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
