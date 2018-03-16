<template lang='pug'>
  .portfolio
    .previews-slider
      .previews-grid
        project-preview(
          v-for='project in projects'
          :project='project'
          :key='project.id'
        )
</template>

<script>
  import RedirectsScroll from '@/mixins/Redirects-scroll'
  import ProjectPreview from '@/components/Project-preview'
  import projects from '@/data/projects'

  export default {
    components: {
      ProjectPreview
    },

    mixins: [
      RedirectsScroll
    ],

    data () {
      return {
        projects
      }
    },

    mounted () {
      this.redirectHorizontalScrollTo('.previews-slider')
    }
  }
</script>

<style lang='scss'>
  .portfolio {
    @include xy-grid;
    @include xy-grid-frame($nested: true);
    @include flex-align($x: center, $y: middle);
    height: 100%;
  }

  .previews-slider {
    @extend %hides-scrollbars;
    @include xy-cell($size: auto);
    @include xy-cell-block($vertical: true);
    @include xy-gutters($negative: true);
    @include xy-grid;
    @include flex-align($x: center);

    @include breakpoint(large) {
      @include xy-cell-block($vertical: false);
      @include flex-align($x: left);

      transform: translate(150px);
      animation-name: slide-left;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    }
  }

  .previews-grid {
    @include xy-grid($wrap: false, $direction: vertical);
    @include xy-gutters($negative: true);
    padding-top: 120px;

    @include breakpoint(large) {
      @include xy-grid($wrap: false, $direction: horizontal);
      padding-top: 0;
      padding-left: 70px;
      padding-right: 70px;
    }
  }
</style>
