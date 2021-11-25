<template>
  <div class="modal">
    <div class="modal-backdrop"></div>
    <div class="modal-window">
      <button class="close" @click="close">X</button>
      <div class="text">Заказ успешно оформлен!</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Modal extends Vue {
  close () {
    this.$emit('closeModal')
  }
}
</script>

<style lang="scss" scoped>
.modal {

  .modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
  }

  .modal-window {
    background-color: #fff;
    position: absolute;
    height: 100px;
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }

    .text {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }
  }
}
</style>
