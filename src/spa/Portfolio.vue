<template lang='pug'>
  .portfolio.grid-x.grid-frame(@mousewheel='redirectVerticalScroll')
    .cell.shrink.cell-block-container
      .grid-x
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
  // @include xy-grid(horizontal, false);
  @include flex-align($x: left, $y: middle);
  height: 100vh;
}
</style>
