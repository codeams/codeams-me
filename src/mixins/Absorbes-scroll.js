//
//  AbsorbesScroll.js | Vue Component Mixin
//  Codeams.me
//
//  Created by Erick A. Montañez on December 2nd, 2017.
//  Copyright © 2017 Codeams. All rights reserved.
//

const AbsorbesScroll = {
  beforeMount () {
    window.addEventListener('mousewheel', (event) => {
      this.$el.scrollTop += event.deltaY
      event.preventDefault()
    })
  }
}

export default AbsorbesScroll
