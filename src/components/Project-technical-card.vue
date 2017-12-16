<template lang='pug'>
  //- TODO: Consider refactoring the template

  .technical-card.row(class='collapse align-middle')
    .column
      .header
        .type {{ project.type }}
        .name {{ project.name }}
        .role {{ project.role }}

      .story {{ project.story }}

      .footer
        .separator

        .collabs
          | Co-worked with
          span(v-for='collab, index in project.collabs' :key='collab')
            span(v-if='index > 0') ,
            | &nbsp;@{{ collab }}

        .dates-interval(v-if='project.startDate === project.endDate').
          around #[strong {{ project.startDate }}]
        .dates-interval(v-else).
          from #[strong {{ project.startDate }}] to #[strong {{ project.endDate }}]
</template>

<script>
import Project from '@/models/Project'

export default {
  props: {
    project: {
      type: Project,
      required: true
    }
  }
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
    color: #606280;
    margin-bottom: 10px;
  }

  .name {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.24px;
    text-transform: uppercase;
  }

  .role {
    margin-bottom: 160px;
    font-size: 20px;
    font-style: italic;
  }

  .story {
    margin-bottom: 50px;
    font-size: 18px;
    font-family: 'Source Sans Pro', $body-font-family;
    line-height: 1.5;
  }

  .separator {
    width: 42px;
    height: 1px;
    margin-bottom: 13px;
    background:  #606280;
  }
  
  .footer {
    font-style: italic;
    color: #606280;
  }

  .collabs {
    margin-bottom: 4px;

    span {
      font-weight: bold;
    }
  }
}
</style>
