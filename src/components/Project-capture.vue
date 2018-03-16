<template lang='pug'>
  .project-capture(:class='{ loading }')
    .image(:class='{ actionable }')
      div(v-if='capture.type === "image"')
        img(:src='capture.source' @load='loading = false')
        project-capture-loader
      div(v-else)
        macbook-capture(:screen-image-src='capture.source')
</template>

<script>
  import MacbookCapture from '@/components/Macbook-capture'
  import ProjectCaptureLoader from '@/components/Project-capture-loader'

  export default {
    components: {
      ProjectCaptureLoader,
      MacbookCapture
    },

    props: {
      capture: {
        type: Object,
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
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: calc(100% * 0.84555);
    border-radius: $global-radius;
    background-color: rgba(from-palette(white), 0.05);
  }

  .project-capture .image {
    @extend %absolute-overlay;
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
