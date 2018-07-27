<template lang='pug'>
  .portfolio
    .previews-slider
      .previews-grid
        project-preview(
          v-for='project in projects'
          v-show='project.visible'
          :project='project'
          :key='project.id'
        )
</template>

<script>
  import ProjectPreview from './components/Project-preview'
  import projects from '@/data/projects'

  export default {
    components: {
      ProjectPreview
    },

    data () {
      return {
        projects
      }
    }
  }
</script>

<style lang='scss'>
  .portfolio {
    @extend %hides-scrollbars;
    @include xy-grid;
    @include xy-grid-frame($nested: true);
    @include xy-cell-block($vertical: true);
    @include flex-align($x: center, $y: middle);
    height: 100%;

    @include breakpoint(large) {
      @include xy-cell-block($vertical: false);
    }
  }

  .previews-slider {
    @include xy-cell($size: auto);
    @include xy-gutters($negative: true);
    @include xy-grid;
    @include flex-align($x: center);
    @include max-size(100%);

    @include breakpoint(large) {
      @include flex-align($x: left);
      @include animation(
        $duration: 1s,
        $fill-mode: forwards,
        $name: slide-left,
        $timing-function: ease-out
      );
      transform: translate(150px);
    }
  }

  .previews-grid {
    @include xy-grid($wrap: false, $direction: vertical);
    @include xy-gutters($negative: true);
    padding-top: 120px;

    @include breakpoint(large) {
      @include xy-grid($wrap: false, $direction: horizontal);
      @include paddings($vertical: 0, $horizontal: 70px);
    }
  }
</style>
