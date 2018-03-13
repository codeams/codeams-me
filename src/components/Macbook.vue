<template>
  <svg width="100%" height="100%" viewBox="0 0 628 531" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Macbook Pro Case</title>
    <desc>Macbook Pro Case showing custom images</desc>
    <defs>
      <polygon id="path-1" points="0.172198635 259.370487 430.260905 259.370487 430.260905 0.42311839 0.172198635 0.42311839"></polygon>
    </defs>
    <g id="Lintercat-landing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="4-copy">
        <g id="Screen-Macbook-Pro">
          <g id="Rounded-container" fill="#626262" opacity="0">
            <rect x="0" y="0" width="628" height="531"></rect>
          </g>
          <g id="To-be-exported" stroke-width="1">
            <g id="Macbook-pro">
              <rect id="Image-container" x="0" y="0" width="628" height="531"></rect>
              <path d="M551,414 L78,414 L78,120.321777 C78,112.41215 84.6190245,106 92.7834042,106 L536.216596,106 C544.381412,106 551,112.41215 551,120.321777 L551,414 Z" id="Screen-holder" fill="#FFFFFF"></path>
              <path d="M37,427 L591,427 C592.104569,427 593,426.104569 593,425 L593,414 C593,413.447715 592.552285,413 592,413 L36,413 C35.4477153,413 35,413.447715 35,414 L35,425 C35,426.104569 35.8954305,427 37,427 Z" id="Anchor" fill="#FFFFFF"></path>
              <g id="Bitmap" transform="translate(99.000000, 131.000000)">
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1"></use>
                </mask>
                <use id="Mask" stroke="#F1F1F1" fill="#F1F1F1" xlink:href="#path-1"></use>
                <image v-bind="{ 'xlink:href': screenImageSrc }" @load='load' preserveAspectRatio="xMidYMin slice" id="Preview" mask="url(#mask-2)" x="-1" y="0" width="433" height="259"></image>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      screenImageSrc: {
        type: String,
        required: true
      }
    },

    methods: {
      load () {
        this.$emit('load')
      }
    }
  }
</script>

