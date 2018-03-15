<template lang='pug'>
  .project(v-if='project')
    .technical-card-container
      project-technical-card(:project='project')
    .captures-list-container
      project-captures-list(:project='project')

  .project.not-found(v-else).
    Project not found 🚑
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
    this.redirectVerticalScrollTo('.captures-list-container')
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
  @include flex-align($x: center, $y: middle);

  height: 100%;
  padding: 120px 20px;

  @include breakpoint(large) {
    @include flex-align($x: justify, $y: middle);
    @include xy-grid-frame;
    padding: 0;    
  }

  .technical-card-container {
    @include xy-cell($size: shrink);

    overflow: hidden;
    width: 100%;
    padding-bottom: 40px;

    @include breakpoint(large) {
      width: 400px;
      height: 100%;
      margin-left: 67px;
      padding-bottom: 0;
    }
  }

  .captures-list-container {
    @extend .hides-scrollbars;

    @include xy-cell($size: auto);
    @include xy-cell-block($vertical: true);

    overflow-y: visible;
    max-width: 1000px;

    @include breakpoint(large) {
      padding-right: 60px;
      padding-left: 110px;
      overflow-y: auto;      
    }
  }
}

.project.not-found {
  padding-top: 140px;
  padding-left: 70px;
  font-weight: bold;
  font-size: 30px;
}
</style>
