<template>
  <div>
    <div v-if="getItems.length">
      <h2 class="page-title">Корзина</h2>
      <div class="cart-list">
        <ul>
          <li class="item" v-for="item in getItems" :key="item.id">
            <img :src="item.image" class="item-image">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-price">${{ item.price }} </span>
            <span>X</span>
            <div>
              <button class="quantityControl cardControl" @click="decrease(item.id)">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button class="quantityControl cardControl" @click="increase(item.id)">+</button>
            </div>
            <span class="item-price">${{ (item.price * item.quantity).toFixed(2) }}</span>

            <button class="delete" @click="deleteFromCart(item.id)">X</button>
          </li>
        </ul>
      </div>

      <div class="total">Итого: ${{ total }}</div>
      <button class="checkout" @click="openModal">Оформить заказ</button>
    </div>

    <div v-else class="cart-is-empty">
      <h2>Ваша коризна пуста :(</h2>
      <nuxt-link to="/catalog">Перейти в каталог</nuxt-link>
    </div>

    <Modal @closeModal="closeModal" v-show="isModalVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Modal from '~/components/Modal.vue'
import { CartItem, CartItemExtended } from '~/assets/ts/interfaces'

@Component({
  components: {
    Modal
  }
})
export default class Cart extends Vue {
  isModalVisible: boolean = false

  get getItems (): CartItem {
    if (this.$store.getters['product/getProducts'].length === 0) {
      this.$store.dispatch('product/fetchProducts')
    }
    return this.$store.getters['cart/getCart']
  }

  get total (): string {
    let sum: number = 0
    this.$store.getters['cart/getCart'].forEach((el: CartItemExtended) => {
      sum += el.quantity * el.price
    })
    return sum.toFixed(2)
  }

  increase (id: number) {
    this.$store.commit('cart/increase', id)
  }

  decrease (id: number) {
    this.$store.commit('cart/decrease', id)
  }

  deleteFromCart (id: number) {
    this.$store.commit('cart/deleteItem', id)
  }

  closeModal () {
    this.isModalVisible = false
  }

  openModal () {
    this.$store.commit('cart/clearCart')
    this.isModalVisible = true
  }
}
</script>

<style lang="scss">
.item {
  display: flex;
  height: 80px;
  justify-content: space-between;
  background-color: $light-gray;
  align-items: center;
  margin-bottom: 40px;
  padding: 0 40px;

  .item-image {
    max-width: 100%;
    max-height: 80%;
  }
}

.total {
  font-size: 18px;
  text-align: right;
}

.checkout {
  outline: none;
  border: none;
  background-color: $primary;
  cursor: pointer;
  color: #fff;
  width: 160px;
  height: 50px;
  font-size: 16px;

  &:hover {
    background-color: $primary-darken;
  }
}

.cart-is-empty {
  margin-top: 80px;
  font-size: 24px;
  text-align: center;
}
</style>
