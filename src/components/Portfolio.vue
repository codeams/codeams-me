<template>
  <div @mousewheel='redirectVerticalScroll'
    class='portfolio row collapse align-middle'>
    <div class='column'>
      <project v-for='(project, index) in projects'
        :details='projects[index]' :key='project.id' />
    </div>
  </div>
</template>

<script>
// Mixins
import RedirectsScroll from '@/mixins/RedirectsScroll'
// Components
import Project from '@/components/Project'
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
    Project
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
