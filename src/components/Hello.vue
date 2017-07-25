<template>
  <div class='hello'>
    <div class='greet'>
      <p><strong>Erick Montañez</strong> is a software engineering</p>
      <p>student and web developer who thinks</p>
      <p>that ocasionally talking in the third</p>
      <p>person is an acceptable, necessary evil.</p>
    </div>

    <div class='find-him'>
      <p>Find him on 
        <a href='https://github.com/codeams/' target='_blank'>github</a>
        or
        <a href='https://codepen.io/codeams/' target='_blank'>codepen</a>.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello'
  }
</script>

<style lang='scss'>
  .hello {
    padding-top: 120px;
  }

  .greet {
    font-size: 36px;
    line-height: 51px;
  }

  .find-him {
    margin-top: 60px;
    font-size: 22px;
  }
</style>
