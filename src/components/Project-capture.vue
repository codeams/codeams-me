<template lang='pug'>
  .project-capture(:class='{ loading }')
    .image(:class='{ actionable }')
      project-capture-loader
      img(:src='src' @load='loading = false')
</template>

<script>
import ProjectCaptureLoader from '@/components/Project-capture-loader'

export default {
  components: {
    ProjectCaptureLoader
  },

  props: {
    src: {
      type: String,
      required: true
    },
    actionable: Boolean
  },

  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang='scss'>
.project-capture {
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: calc(100% * 0.84555);
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(get-color(white), 0.05);
}

.project-capture .image {
  @extend .absolute-overlay;
  transition: transform 1s;

  &.actionable:hover {
    transform: rotate(1deg);
  }
}

.project-capture {
  .loader {
    opacity: 0;
    transition: opacity 0.5s;
  }

  img {
    opacity: 1;
    transition: opacity 2s;
  }
}

.project-capture.loading {
  .loader {
    opacity: 1;
  }

  img {
    opacity: 0;
  }
}
</style>
