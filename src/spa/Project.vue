<template lang='pug'>
  .project(v-if='project')
    .technical-card-container
      project-technical-card(:project='project')
    .captures-list-container
      project-captures-list(:project='project')

  .project.not-found(v-else).
    Project not found :(
</template>

<script>
import ProjectTechnicalCard from '@/components/Project-technical-card'
import ProjectCapturesList from '@/components/Project-captures-list'
import RedirectsScroll from '@/mixins/Redirects-scroll'
import projects from '@/data/projects'

export default {
  components: {
    ProjectTechnicalCard,
    ProjectCapturesList
  },

  mixins: [
    RedirectsScroll
  ],

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

  mounted () {
    this.redirectScrollTo('.captures-list-container')
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
  @include xy-grid;
  @include xy-grid-frame;
  @include flex-align($x: justify, $y:middle);

  height: 100%;

  .technical-card-container {
    @include xy-cell($size: shrink);

    overflow: hidden;
    width: 400px;
    height: 100%;
    margin-left: 67px;
  }

  .captures-list-container {
    @extend .hides-scrollbars;

    @include xy-cell($size: auto);
    @include xy-cell-block($vertical: true);

    padding-right: 60px;
    padding-left: 110px;
  }
}

.project.not-found {
  padding-left: 70px;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}
</style>
