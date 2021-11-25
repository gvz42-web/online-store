<template>
  <div class="product-card">
    <img :src="item.image" alt="" class="product-img">
    <span class="product-title">{{ item.title }}</span>
    <span class="product-price">{{ item.price }}</span>
    <button class="add-to-cart" @click="addToCart(item.id)">Добавить в коризну</button>
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

  addToCart (id: number) {
    this.$store.dispatch('cart/addToCart', id)
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
