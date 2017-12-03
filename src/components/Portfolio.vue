<template>
  <div @mousewheel='redirectVerticalScroll'
    class='portfolio row collapse align-middle'>
    <div class='column'>
      <project-preview v-for='project in projects'
        :instance='project.preview' :key='project.id' />
    </div>
  </div>
</template>

<script>
// Mixins
import RedirectsScroll from '@/mixins/Redirects-scroll'
// Components
import ProjectPreview from '@/components/Project-preview'
// Data
import projects from '@/data/projects'

export default {
  mixins: [RedirectsScroll],

  data () {
    return {
      projects
    }
  },

  components: {
    ProjectPreview
  }
}
</script>

<style lang='scss'>
.portfolio {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar { 
    display: none; 
  }
}
</style>
