//
//  RedirectsScroll.js | Vue Component Mixin
//  Codeams.me
//
//  Created by Erick A. Montañez on December 2nd, 2017.
//  Copyright © 2017 Codeams. All rights reserved.
//

const speedFactor = 0.4 // The scroll amount multiplier

const RedirectsScroll = {
  methods: {
    redirectVerticalScroll ($event) {
      const target = this.$el
      const isVerticalScroll = $event.deltaY
      const delta = isVerticalScroll ? $event.deltaY : $event.deltaX

      target.scrollLeft += (delta * speedFactor)
      $event.preventDefault()
    }
  }
}

export default RedirectsScroll
