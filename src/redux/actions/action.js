export function addGoodToCart(id) {
  return {
    type: 'ADD_GOOD_TO_CART',
    payload: {
      id: id
    }
  }
}

export function deleteGoodFromCart(id) {
  return {
    type: 'DELETE_GOOD_FROM_CARD',
    payload: {
      id: id
    }
  }
}