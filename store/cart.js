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

  countItem (state, id, count) {
    state.cart[id] = count
  }
}

export const actions = {
  addToCart ({ commit }, id) {
    commit('addItem', id)
  }
}

export const getters = {
  getCart (state, getters, rootState) {
    return state.cart.map(({ id, quantity }) => {
      console.log(rootState)
      const product = rootState.product.products.find(product => product.id === id)
      return {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}
