<template lang='pug'>
  .portfolio(@mousewheel='redirectVerticalScroll')
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
  @extend .hides-scrollbars;

  @include xy-cell($size: auto);
  @include xy-cell-block;
  @include xy-gutters($negative: true);
  @include xy-grid;
}

.previews-grid {
  @include xy-grid($wrap: false);
  @include xy-gutters($negative: true);

  padding-left: 70px;
  padding-right: 70px;
}
</style>
