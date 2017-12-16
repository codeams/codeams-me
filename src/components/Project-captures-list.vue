<template lang='pug'>
  .project-captures-list
    .capture-container(v-for='capture in project.captures' :key='capture.id')
      project-capture(:src='capture')
</template>

<script>
import Project from '@/models/Project'
import AbsorbesScroll from '@/mixins/Absorbes-scroll'
import ProjectCapture from '@/components/Project-capture'

export default {
  components: {
    ProjectCapture
  },

  mixins: [
    AbsorbesScroll
  ],

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
  width: 100%;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 60px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; 
  }
}

.capture-container {
  width: 100%;
  margin-bottom: 30px;
}
</style>
