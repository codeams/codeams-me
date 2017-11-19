<template>
  <div class='portfolio row collapse align-middle'>
    <div class='column'>
      <project v-for='(project, index) in projects'
        :details='projects[index]' :key='project.id' />
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project'

export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          name: 'Warriors Lighthouse',
          role: 'Vue development, UI design.',
          previewUrl: 'http://assets.app/warriors-lighthouse.png'
        },
        {
          id: 2,
          name: 'Semple',
          role: 'iOS development, API design.',
          previewUrl: 'http://assets.app/semple.png'
        },
        {
          id: 3,
          name: 'Kiiwik Landing',
          role: 'Front-end development.',
          previewUrl: 'http://assets.app/kiiwik-landing.png'
        },
        {
          id: 4,
          name: 'Congress',
          role: 'Vue development, UI & interaction design.',
          previewUrl: 'http://assets.app/congress.png'
        }
      ]
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
