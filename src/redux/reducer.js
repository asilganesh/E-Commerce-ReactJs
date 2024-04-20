

export const initialState = {

    products: [],
    cart: [],
    category: [],
    error: false,
    loading: false


}

export function productReducer(state = initialState, action) {
    switch (action.type) {

        case "START_LOADING":

            return { ...state, loading: true }

        case "STOP_LOADING":

            return { ...state, loading: false }

        case "FETCH_PRODUCT_SUCCESS":
            let newData = action.payload.map(products => { return { ...products, productInCart: false, count: 1 } })
            return { ...state, products: newData, category: newData }

        case "CATEGORY":
            if (action.payload != "all") {
                let newCategoryData = state.products.filter(val => val.category == action.payload)
                return { ...state, category: newCategoryData }
            }
            else {
                return { ...state, category: state.products }
            }

        case "SEARCH":
            if (action.payload != null) {
                let newData = state.products.filter(val => val.title.includes(action.payload))
                return { ...state, category: newData }
            }
            return { ...state, category: state.products }

        case "ADD_TO_CART":
            const newProductData = state.products.map(product => {
                if (product.id == action.payload.id) {

                    return { ...product, productInCart: true }
                }
                else {
                    return product
                }
            })
            const newCategoryData = state.category.map(product => {
                if (product.id == action.payload.id) {

                    return { ...product, productInCart: true }
                }
                else {
                    return product
                }
            })

            return { ...state, cart: [...state.cart, action.payload], products: newProductData, category: newCategoryData }

        case "REMOVE_ITEM":
            const newCartData = state.cart.filter(val => val.id != action.payload.id)



            const newProductDataafter = state.products.map(product => {
                if (product.id == action.payload.id) {

                    return { ...product, productInCart: false }
                }
                else {
                    return product
                }
            })
            const newCategoryDataafter = state.category.map(product => {
                if (product.id == action.payload.id) {

                    return { ...product, productInCart: false }
                }
                else {
                    return product
                }
            })

            return { ...state, cart: newCartData, products: newProductDataafter, category: newCategoryDataafter }

        case "INCREMENT":

            const counterIncrement = state.cart.map(cart => {
                if (cart.id == action.payload.id) {
                    return { ...cart, count: cart.count + 1 }
                }
                else {
                    return cart
                }
            })

            return { ...state, cart: counterIncrement }

        case "DECREMENT":

            const counterDecrement = state.cart.map(cart => {
                if (cart.id == action.payload.id) {
                  if(cart.count>1){
                    return { ...cart, count: cart.count - 1 }
                  }
                  return {...cart}
                }
                else {
                    return cart
                }
            })

            return { ...state, cart: counterDecrement }


        default:
            return { ...state };
    }
}

