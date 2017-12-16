<template lang='pug'>
  .heading
    .name(@click='$router.push({ name: "Portfolio" })') Erick A. Montañez
    transition(name='fade')
      span.ocupation(v-if='$route.name === "Portfolio"') Software engineer, web and iOS developer
</template>

<style lang='scss'>
.heading {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px 0 40px 70px;

  & * {
    cursor: default;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    color: get-color(white);
    cursor: pointer;
    letter-spacing: -0.16px;
  }

  .ocupation {
    font-size: 18px;
    font-style: italic;
    letter-spacing: -0.12px;
  }
}
</style>
