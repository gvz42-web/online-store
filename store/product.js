export const state = () => ({
  products: []
})

export const actions = {
  async fetchProducts ({ commit }) {
    const res = await fetch('https://fakestoreapi.com/products/')
    const products = await res.json()
    commit('updateUsers', products)
  }
}

export const mutations = {
  updateUsers (state, products) {
    state.products = products
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  }
}
