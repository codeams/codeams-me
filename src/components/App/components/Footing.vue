<template lang='pug'>
  transition(name='fade')
    .footing(v-if='$route.name === "Portfolio"')
      span.copyrights &copy; 2018
      a(href='https://erickmontanez.com') about me
      a(href='https://github.com/codeams/codeams.me') source code
</template>

<style lang='scss'>
  .footing {
    @include show-for(large);
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 8 * $base-spacing;
    padding-right: 0;
    padding-bottom: 8 * $base-spacing;
    padding-left: $site-left-padding;
    font-style: italic;
    color: from-palette(dolphin);

    .copyrights {
      margin-right: 8 * $base-spacing;
      cursor: default;
    }

    a,
    a:visited {
      margin-right: 8 * $base-spacing;
      color: inherit;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
