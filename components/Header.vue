<template>
  <header>
    <span class="logo">Online Store</span>
    <nav>
      <nuxt-link to="/catalog" active-class="active" class="nav-link">Каталог</nuxt-link>
      <nuxt-link to="/cart" active-class="active" class="nav-link">Корзина</nuxt-link>
    </nav>

  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Header extends Vue {
  // Declared as component data
  message = 'Hello World!'
}
</script>

<style lang="scss" scoped>
  header {
    height: $header-height;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    position: fixed;

    .logo {
      font-family: Raleway;
      font-size: 44px;
    }

    nav {
      font-family: 'Open Sans',  Sans-Serif;
      display: flex;
      .nav-link {
        margin: 0 20px;
        color: $black;
        text-decoration: none;
        &.active {
          color: $primary;
        }
      }
    }
  }
</style>
