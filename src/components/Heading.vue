<template>
  <div class='heading'>
    <span class='name' @click='$router.push({ name: "Portfolio" })'>
      Erick A. Montañez
    </span>
    <span class='dash'> — </span>
    <span class='ocupation'>software engineer, web & iOS developer</span>
  </div>
</template>

<style lang='scss'>
.heading {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px 0 40px 70px;
  font-size: 18px;

  & * {
    cursor: default;
  }

  .name {
    font-weight: bolder;
    color: get-color(white);
    cursor: pointer;
  }

  .dash,
  .ocupation {
    color: get-color(baby-palenight);
  }
}
</style>
