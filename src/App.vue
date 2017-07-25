<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang='scss'>
  @import '~assets/style/global';
  @import 'app';

  #app {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-weight: 300;
    background-color: #292D3E;
    color: #959DCB; //#B2CCD6;
  }

  #app strong {
    font-weight: 300;
    color: #89DDFF; // #77abfd;
  }

  #app a {
    text-decoration: none;
    color: #89DDFF;

    &:hover {
      color: lighten(#89DDFF, 10%);
    }
  }
</style>
