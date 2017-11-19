<template>
  <div class='heading'>
    <span class='name'>Erick A. Montañez</span>
    <span class='dash'> — </span>
    <span class='ocupation'>software engineer, web & iOS developer</span>
  </div>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style lang='scss'>
.heading {
  padding: 40px 0 40px 70px;
  font-size: 20px;

  .name {
    font-weight: bolder;
    color: get-color(white);
  }

  .dash,
  .ocupation {
    color: get-color(baby-palenight);
  }
}
</style>
