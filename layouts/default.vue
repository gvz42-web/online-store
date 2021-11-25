<template>
  <div>
    <Header />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '~/components/Header.vue'

@Component({
  // Declared as component data
  components: {
    Header
  }
})

export default class defaultLayout extends Vue {}
</script>

<style lang="scss">
  .container {
    font-family: 'Open Sans',  Sans-Serif;
    width: 700px;
    margin: $header-height+40px auto 0;
  }
</style>
