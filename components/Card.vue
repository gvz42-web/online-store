<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="item.image" alt="" >
    </div>
    <span class="product-title">{{ item.title }}</span>
    <span class="product-price">{{ item.price }}</span>
    <div v-if="fromCart(item.id)" class="controlButtons">
      <button class="quantityControl cardControl" @click="decrease(item.id)">-</button>
      <span class="quantity" @click="increase(item.id)">{{ fromCart(item.id).quantity }}</span>
      <button class="quantityControl cardControl" @click="increase(item.id)">+</button>
    </div>
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
  addToCart (id: number) {
    this.$store.dispatch('cart/addToCart', id)
  }

  get fromCart () {
    return this.$store.getters['cart/checkStatus']
  }

  increase (id: number) {
    this.$store.commit('cart/increase', id)
  }

  decrease (id: number) {
    this.$store.commit('cart/decrease', id)
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
  margin: 0 10px 40px;

  .product-img {
    max-height: 120px;
    text-align: center;

    img {
      max-height: 100%;
      max-width: 100%;
    }
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

  .controlButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 40px;
    }

    .quantity {
      font-size: 22px;
    }
  }

  .add-to-cart, .cardControl{
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
