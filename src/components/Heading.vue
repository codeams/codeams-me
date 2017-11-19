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
  margin-top: 40px;
  margin-left: 70px;
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
