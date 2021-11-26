export const state = () => ({
  cart: []
})

export const mutations = {
  addItem (state, id) {
    state.cart.push({
      id,
      quantity: 1
    })
  },

  increase (state, id) {
    const index = state.cart.findIndex(x => x.id === id)
    state.cart[index].quantity += 1
  },

  decrease (state, id) {
    const index = state.cart.findIndex(x => x.id === id)
    state.cart[index].quantity--
    if (state.cart[index].quantity === 0) {
      state.cart.splice(index, 1)
    }
  },

  deleteItem (state, id) {
    const index = state.cart.findIndex(x => x.id === id)
    state.cart.splice(index, 1)
  },

  updateCart (state, cart) {
    state.cart = cart || []
  },

  clearCart (state) {
    state.cart = []
  }
}

export const actions = {
  addToCart ({ commit }, id) {
    commit('addItem', id)
  }
}

export const getters = {
  getCart (state, _, rootState) {
    return state.cart.map(({ id, quantity }) => {
      const product = rootState.product.products.find(product => product.id === id)
      return {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  checkStatus (state) {
    return function (id) {
      const item = state.cart.find(i => i.id === id)
      return item
    }
  }
}
