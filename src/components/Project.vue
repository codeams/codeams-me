<template>
  <div class='project'>
    <div class='preview'></div>

    <div class='label'>
      <span class='name'>{{ details.name }}</span>
      <span class='dash'> — </span>
      <span class='role'>{{ details.role }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['details']
}
</script>

<style lang='scss' scoped>
// TODO: Refactor to use dinamic height

.project {
  display: inline-block;
  width: 628px;
  margin-left: 30px;

  &:first-of-type {
    margin-left: 70px;
  }

  &:last-of-type {
    margin-right: 70px;
  }

  .preview {
    width: 100%;
    height: 531px;
    background: get-color(teen-palenight);
    border-radius: 4px;
  }

  .label {
    margin-top: 17px;
    color: get-color(white);

    .name {
      font-weight: bold;
    }
  }
}
</style>
