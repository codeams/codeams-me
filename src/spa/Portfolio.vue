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
  @extend .no-scrollbars;

  @include xy-grid;
  @include xy-grid-frame;
  @include flex-align($x: left, $y: middle);

  height: 100vh;
}

.previews-slider {
  @include xy-cell-block-container;

  padding-left: 70px;
  padding-right: 70px;
}

.previews-grid {
  @include xy-grid(horizontal, false);
  @include xy-gutters($negative: true);
}
</style>
