<template>
  <div class='technical-card row collapse align-middle'>
    <div>
      <div class='header'>
        <div class='type'>{{ project.type }}</div>
        <div class='name'>{{ project.name }}</div>
        <div class='role'>{{ project.role }}</div>
      </div>

      <div class='story'>{{ project.story }}</div>

      <div class='footer'>
        <div class='separator'></div>
        <div class='collabs'>
          Co-worked with
          <span v-for='collab in project.collabs' :key='collab'>
            @{{ collab }}
          </span>
        </div>

        <div class='dates-interval'>
          from <strong>{{ project.startDate }}</strong>
          <span> to </span>
          <strong>{{ project.endDate }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style lang='scss'>
.technical-card {
  width: 100%;
  height: 100%;

  * {
    line-height: 1.3;
  }

  .type {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #606C80;
    margin-bottom: 10px;
  }

  .name {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .role {
    font-size: 20px;
    margin-bottom: 160px;
  }

  .story {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 50px;
  }

  .separator {
    width: 42px;
    height: 1px;
    margin-bottom: 13px;
    background:  #606C80;
  }
  
  .footer {
    color: #606C80;
  }

  .collabs {
    margin-bottom: 4px;

    span {
      font-weight: bold;
    }
  }
}
</style>
