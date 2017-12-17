<template lang='pug'>
  transition(name='fade')
    .footing(v-if='$route.name === "Portfolio"')
      a(href='#') copyrights
      a(href='#') about me
      a(href='#') source code
</template>

<style lang='scss'>
  .footing {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 40px 0 40px 70px;
    font-style: italic;

    a,
    a:visited {
      margin-right: 40px;
      color: #434666;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
