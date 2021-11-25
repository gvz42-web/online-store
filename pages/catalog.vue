<template>
  <div>
    <h2 class="page-title">
      Каталог
    </h2>
    <div class="products-list">
      <Card v-for="product of allProducts" :key="product.id" :item="product" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Card from '~/components/Card.vue'
import { Product } from '~/assets/ts/interfaces'

@Component({
  components: {
    Card
  },
  async fetch ({ store }) {
    await store.dispatch('product/fetchProducts')
  }
})
export default class Catalog extends Vue {
  get allProducts () : Product[] {
    return this.$store.getters['product/getProducts']
  }
}
</script>

<style lang="scss">
.page-title {
  font-size: 32px;
  margin: 40px 0;
}

.products-list {
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
