<template>
  <div class='heading'>
    <div class='name' @click='$router.push({ name: "Portfolio" })'>
      Erick A. Montañez
    </div>
    <transition name='fade'>
      <span class='ocupation' v-if='$route.name === "Portfolio"'>
        Software engineer, web and iOS developer
      </span>
    </transition>
  </div>
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
