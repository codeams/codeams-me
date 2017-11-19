<template>
  <div class='viewport'>
    <heading></heading>
    <frame>
      Frame
    </frame>
    <footing></footing>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Frame from '@/components/Frame'
import Footing from '@/components/Footing'

export default {
  name: 'Viewport',

  data () {
    return {}
  },

  components: {
    Heading,
    Frame,
    Footing
  }
}
</script>
