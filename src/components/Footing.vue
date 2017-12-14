<template>
  <transition name='fade'>
    <div class='footing' v-if='$route.name === "Portfolio"'>
      <a href='#'>copyrights</a>
      <a href='#'>about me</a>
      <a href='#'>source code</a>
    </div>
  </transition>
</template>

<style lang='scss'>
  .footing {
    z-index: 99;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 40px 0 40px 70px;
    font-style: italic;
    
    a,
    a:visited {
      margin-right: 40px;
      color: #434666;

      &:hover {
        text-decoration: underline;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
