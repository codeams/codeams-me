<template>
  <div class='project-capture' :class='{ "loading": loading }'>
    <div class='image' :class='{ "clickable": clickable }'>
      <loader />
      <img :src='url' @load='loading = false' />
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    clickable: Boolean
  },

  data () {
    return {
      loading: true
    }
  },

  components: {
    Loader
  }
}
</script>

<style lang='scss'>
.project-capture {
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: calc(100% * 0.865);
  border-radius: 4px;
  overflow: hidden;
  background-color: #282939;
}

.project-capture .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.clickable {
    transition: transform 1s;
    cursor: pointer;

    &:hover {
      transform: rotate(1deg);
    }
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
