<template>
  <div>
    <h2 class="page-title">Корзина</h2>
    <div class="cart-list">
      <ul>
        <li class="item" v-for="item in getItems" :key="item.id">
          <img :src="item.image" class="item-image">
          <span class="item-title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Cart extends Vue {

  get getItems () {
    return this.$store.getters['cart/getCart']
  }
}
</script>

<style>
.item {
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin-bottom: 40px;
}
</style>
