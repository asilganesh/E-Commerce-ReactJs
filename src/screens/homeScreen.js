import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { addToCart, category, decrement, fetchProducts, increment, removeFromCart, searchBy } from "../redux/action"
import CategoryComponent from "../Compnents/category"
import ProductsComponent from "../Compnents/productsDetails"
import NavbarComponent from "../Compnents/navbar"


const HomeScreen=()=>{

    const dispatch = useDispatch()
    const Products = useSelector(state => state.category)
    const cart = useSelector(state => state.cart)
  
  
    const handleCategory = (type) => {
  
      dispatch(category(type))
  
    }
  
    const handleSearch = (e) => {
  
  
      dispatch(searchBy(e.target.value))
    }
  
    const handleAddToCart = (data) => {
  
      if (data.productInCart) {
        alert("product is already in cart")
      }
      else {
        dispatch(addToCart(data))
      }
  
  
    }
  
    const handleRemoveItem = (data) => {
      dispatch(removeFromCart(data))
  
    }
  
    const handleIncrement = (data) => {
  
      dispatch(increment(data))
    }
  
    const handleDecrement = (data) => {
      dispatch(decrement(data))
  
    }

    return(

        <>
 <div style={{position:"fixed",zIndex:"1", width:"99vw",marginTop:"-100px"}}>

 <NavbarComponent handleSearch={handleSearch} cart={cart} />
 </div>

<div style={{marginTop:"100px"}}>

<CategoryComponent handleCategory={handleCategory} />

</div>
<div>
<ProductsComponent products={Products} handleAddToCart={handleAddToCart} />

</div>

        </>
    )
}

export default HomeScreen