<template>
  <div class='heading'>
    <div class='name' @click='$router.push({ name: "Portfolio" })'>
      Erick A. Montañez
    </div>
    <span class='ocupation'>
      Software engineer, web and iOS developer.
    </span>
  </div>
</template>

<style lang='scss'>
.heading {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px 0 40px 70px;
  font-family: 'Fira Sans', $body-font-family;

  & * {
    cursor: default;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    color: get-color(white);
    cursor: pointer;
  }

  .ocupation {
    font-size: 18px;
    font-weight: lighter;
  }
}
</style>
