import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { addToCart, category, decrement, fetchProducts, increment, removeFromCart, searchBy } from "../redux/action"
import ProductsComponent from "./productsDetails"
import CategoryComponent from "./category"
import NavbarComponent from "./navbar"
import CartComponent from "./cart"
import "../Compnents/index.module.css"
import NavigationStack from "../NavigationStack/navigationStack"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export const ProductsCompnent = () => {






  return (
    <>

        <BrowserRouter >
       
          <NavigationStack  />
       

        </BrowserRouter>




      {/* <NavbarComponent handleSearch={handleSearch} cart={cart}/>
    


    <CategoryComponent handleCategory={handleCategory}/>
    
   <ProductsComponent products={Products} handleAddToCart={handleAddToCart}/> */}


      {/* <CartComponent cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleRemoveItem={handleRemoveItem}/> */}



    </>

  )
}