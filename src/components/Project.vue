<template>
  <div v-if='instance' class='project row align-justify'>
    <div class='technical-card-container'>
      <project-technical-card :project='instance' />
    </div>
    <div class='captures-list-container column'>
      <project-captures-list :project='instance' />
    </div>
  </div>
  <div v-else class='project not-found row align-middle'>
    Project not found :(
  </div>
</template>

<script>
// Components
import ProjectTechnicalCard from '@/components/Project-technical-card'
import ProjectCapturesList from '@/components/Project-captures-list'
// Data
import projects from '@/data/projects'

export default {
  data () {
    return {
      instance: undefined
    }
  },

  methods: {
    selectInstanceFromRouteParams () {
      const projectId = this.$route.params.id
      const instance = projects.find(x => x.id === projectId)
      this.instance = instance
    }
  },

  beforeMount () {
    this.selectInstanceFromRouteParams()
  },

  watch: {
    '$route.params.id' () {
      this.selectInstanceFromRouteParams()
    }
  },

  components: {
    ProjectTechnicalCard,
    ProjectCapturesList
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
