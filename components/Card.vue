<template>
  <div class="product-card">
    <img :src="item.image" alt="" class="product-img">
    <span class="product-title">{{ item.title }}</span>
    <span class="product-price">{{ item.price }}</span>
    <div v-if="fromCart(item.id)">Уже добавлено {{ fromCart(item.id) }}</div>
    <button v-else class="add-to-cart" @click="addToCart(item.id)">Добавить в коризну</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const CardProps = Vue.extend({
  props: {
    item: Object
  }
})

@Component
export default class Card extends CardProps {

  inCart: boolean = false
  quantity: number = 0

  addToCart (id: number) {
    this.$store.dispatch('cart/addToCart', id)
  }

  get fromCart () {
    return this.$store.getters['cart/checkStatus']
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 200px;
  height: 320px;
  padding: 14px;
  background-color: $light-gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;

  .product-img {

  }

  .product-title {
    font-family: Raleway, 'sans-serif';
    font-weight: 700;
    font-size: 16px;
  }

  .product-price {
    font-size: 22px;
    align-self: flex-end;
  }

  .add-to-cart {
    background-color: $primary;
    outline: none;
    border: none;
    color: #fff;
    height: 40px;
    cursor: pointer;

    &:hover {
      background-color: $primary-darken;
    }
  }

}

</style>
