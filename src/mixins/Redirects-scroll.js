//
//  RedirectsScroll.js | Vue Component Mixin
//  Codeams.me
//
//  Created by Erick A. Montañez on December 2nd, 2017.
//  Copyright © 2017 Codeams. All rights reserved.
//

// TODO: Improve functions naming
// // Needs a more clear communication about the intention
// // of the provided functions and their interface.

const mousewheel = 'mousewheel'

const absorbVerticalScroll = function (event) {
  this.scrollTop += event.deltaY
}

const absorbHorizontalScroll = function (event) {
  const isVerticalScroll = event.deltaY
  const delta = isVerticalScroll ? event.deltaY : event.deltaX

  if (isVerticalScroll) {
    this.scrollLeft += delta
    event.preventDefault()
  }
}

const RedirectsScroll = {
  // TODO: Improve edge cases on query selector and selector data types
  // // in order to provide a more appropiate function interface.
  methods: {
    redirectScrollTo (selector) {
      let elemWhoAbsorbs = selector ? this.$el.querySelector(selector) : this.$el
      window.addEventListener(mousewheel, absorbVerticalScroll.bind(elemWhoAbsorbs))
    },
    redirectUnidirectionalScrollTo (selector) {
      let elemWhoAbsorbs = selector ? this.$el.querySelector(selector) : this.$el
      window.addEventListener(mousewheel, absorbHorizontalScroll.bind(elemWhoAbsorbs))
    }
  },

  beforeDestroy () {
    window.removeEventListener(mousewheel, absorbVerticalScroll)
    window.removeEventListener(mousewheel, absorbHorizontalScroll)
  }
}

export default RedirectsScroll
