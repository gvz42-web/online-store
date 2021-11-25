export interface Product{
  id: number
  title: string
  price: number
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
  category: string
}

export interface CartItem{
  id: number
  quantity: number
}

export interface CartItemExtended{
  id: number
  quantity: number
  title: string
  price: number
  image: string
}
