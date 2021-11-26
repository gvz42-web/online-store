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

export default class defaultLayout extends Vue {
  mounted () {
    this.$store.commit('cart/updateCart', JSON.parse(localStorage.getItem('cart') || 'null'))
    this.$store.subscribe((_, state) => {
      localStorage.setItem('cart', JSON.stringify(state.cart.cart))
    })
  }
}
</script>

<style lang="scss">
  .container {
    font-family: 'Open Sans',  Sans-Serif;
    width: 1200px;
    margin: $header-height+40px auto 0;
  }
</style>
