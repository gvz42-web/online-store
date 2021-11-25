export const state = () => ({
  products: []
})

export const actions = {
  async fetchProducts ({ commit }) {
    console.log('Fetch started')
    const res = await fetch('https://fakestoreapi.com/products/')
    const products = await res.json()
    console.log('Fetch completed')
    commit('updateUsers', products)
  }
}

export const mutations = {
  updateUsers (state, products) {
    state.products = products
    console.log('Mutation completed', state)
  }
}

export const getters = {
  getProducts (state) {
    console.log(state.products)
    return state.products
  }
}
