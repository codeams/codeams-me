<template lang='pug'>
  //- TODO: Consider refactoring the template

  .technical-card
    .cell
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
  @include xy-grid(vertical);
  @include flex-align($x: center, $y: middle);

  width: 100%;
  line-height: 1.3;
  text-align: center;

  @include breakpoint(large) {
    height: 100%;
    text-align: left;
  }

  .type {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: from-palette(dolphin);
    margin-bottom: 10px;
  }

  .name {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.24px;
    text-transform: uppercase;
  }

  .role {
    margin-bottom: 20px;
    font-size: 20px;
    font-style: italic;

    @include breakpoint(large) {
      margin-bottom: 160px;
    }
  }

  .story {
    margin-bottom: 50px;
    font-size: 18px;
    font-family: 'Source Sans Pro', $body-font-family;
    line-height: 1.5;
    display: none;

    @include breakpoint(large) {
      display: block;
    }

    // TODO: Refactor using show-for mixin
  }

  .separator {
    width: 42px;
    height: 1px;
    margin-bottom: 13px;
    margin-left: auto;
    margin-right: auto;
    background-color: from-palette(dolphin);

    @include breakpoint(large) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  
  .footer {
    font-style: italic;
    color: from-palette(dolphin);
  }

  .collabs {
    margin-bottom: 4px;

    span {
      font-weight: bold;
    }
  }
}
</style>
