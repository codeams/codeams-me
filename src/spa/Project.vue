<template lang='pug'>
  .project.grid-x.grid-frame.align-justify.align-middle(v-if='project')
    .technical-card-container.cell.shrink
      project-technical-card(:project='project')
    .captures-list-container.cell.auto.cell-block-y
      project-captures-list(:project='project')

  .project.not-found.grid-x.grid-frame.grid-padding-x.align-middle(v-else)
    .cell Project not found :(
</template>

<script>
import ProjectTechnicalCard from '@/components/Project-technical-card'
import ProjectCapturesList from '@/components/Project-captures-list'
import projects from '@/data/projects'

export default {
  components: {
    ProjectTechnicalCard,
    ProjectCapturesList
  },

  data () {
    return {
      project: undefined
    }
  },

  watch: {
    '$route.params.id' () {
      this.setProjectBasedOnRouteParams()
    }
  },

  beforeMount () {
    this.setProjectBasedOnRouteParams()
  },

  methods: {
    setProjectBasedOnRouteParams () {
      const projectId = this.$route.params.id
      const project = projects.find(x => x.id === projectId)
      this.project = project
    }
  }
}
</script>

<style lang='scss'>
.project {
  height: 100vh;

  .technical-card-container {
    overflow: hidden;
    width: 400px;
    height: 100vh;
    margin-left: 67px;
  }

  .captures-list-container {
    height: 100vh;
    padding-right: 60px;
    padding-left: 110px;
  }
}

.project.not-found {
  padding-left: 67px;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}
</style>
