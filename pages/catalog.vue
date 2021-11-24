<template>
  <div>
    <h2 class="page-title">Каталог</h2>
    <div class="products-list">
      <Card v-for="card of 5" :key="card"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Card from '~/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Catalog extends Vue {}
</script>

<style lang="scss">
.page-title {
  font-size: 32px;
  margin: 40px 0;
}

.products-list {
  width: 700px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 0 auto;
}
</style>
