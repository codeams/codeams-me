<template>
  <div class='project-captures-list'>
    <div class='capture-container'
      v-for='capture in project.captures' :key='capture.id'>
        <project-capture :url='capture' />
    </div>
  </div>
</template>

<script>
// Mixins
import AbsorbesScroll from '@/mixins/Absorbes-scroll'
// Components
import ProjectCapture from '@/components/Project-capture'

export default {
  props: ['project'],
  mixins: [AbsorbesScroll],

  components: {
    ProjectCapture
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
