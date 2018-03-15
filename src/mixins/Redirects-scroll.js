//
//  RedirectsScroll.js | Vue Component Mixin
//  Codeams.me
//
//  Created by Erick A. Montañez on December 2nd, 2017.
//  Copyright © 2018 Codeams. All rights reserved.
//

const mousewheel = 'mousewheel'

const absorbVerticalScroll = function (event) {
  this.scrollTop += event.deltaY
}

const absorbHorizontalScroll = function (event) {
  if (event.deltaX) {
    this.scrollLeft += event.deltaX
    event.preventDefault()
  }
}

const RedirectsScroll = {
  data () {
    return {
      scrollRedirectionFunctions: []
    }
  },

  methods: {
    redirectVerticalScrollTo (selector) {
      let elemWhoAbsorbs = selector ? this.$el.querySelector(selector) : this.$el
      let scrollRedirectionFunction = absorbVerticalScroll.bind(elemWhoAbsorbs)
      this.scrollRedirectionFunctions.push(absorbVerticalScroll.bind(elemWhoAbsorbs))
      window.addEventListener(mousewheel, scrollRedirectionFunction)
    },
    redirectHorizontalScrollTo (selector) {
      let elemWhoAbsorbs = selector ? this.$el.querySelector(selector) : this.$el
      let scrollRedirectionFunction = absorbHorizontalScroll.bind(elemWhoAbsorbs)
      this.scrollRedirectionFunctions.push(scrollRedirectionFunction)
      window.addEventListener(mousewheel, scrollRedirectionFunction)
    }
  },

  beforeDestroy () {
    for (let scrollRedirectionFunction of this.scrollRedirectionFunctions) {
      window.removeEventListener(mousewheel, scrollRedirectionFunction)
    }
  }
}

export default RedirectsScroll
