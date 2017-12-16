<template lang='pug'>
  .project.row.align-justify(v-if='project')
    .technical-card-container
      project-technical-card(:project='project')
    .captures-list-container.column
      project-captures-list(:project='project')

  .project.not-found.row.align-middle(v-else).
    Project not found :(
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
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  .technical-card-container {
    overflow: hidden;
    width: 400px;
    height: 100%;
    padding-left: 67px;
    box-sizing: content-box;
  }

  .captures-list-container {
    width: 100%;
    height: 100%;
    max-width: 870px;

    padding-right: 60px;
    padding-left: 110px;
  }
}

.project.not-found {
  height: 100%;
  padding-left: 67px;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}
</style>
