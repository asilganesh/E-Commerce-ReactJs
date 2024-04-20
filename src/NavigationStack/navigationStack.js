import CategoryComponent from "../Compnents/category"
import NavbarComponent from "../Compnents/navbar"
import ProductsComponent from "../Compnents/productsDetails"

import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/homeScreen"
import CartComponent from "../screens/cartScreen"
import AboutScreenComponent from "../screens/aboutScreen"
import Cart from "../screens/cartScreen"
import { useEffect } from "react"
import { fetchProducts } from "../redux/action"
import { useDispatch } from "react-redux"
import ContactScreenComponent from "../screens/contactScreen"


const NavigationStack = () => {

    const dispatch=useDispatch()


  
  
    useEffect(() => {
  
  
        fetchData()
    
    
      }, [])
    
    
      function fetchData() {
        dispatch(fetchProducts())
    
    
      }

    return (

        <>

            <Routes>

                <Route path="/" Component={HomeScreen} />
                <Route path="/cart" Component={Cart}/>
                <Route path="/aboutus" Component={AboutScreenComponent}/>
                <Route path="/contactus" Component={ContactScreenComponent}/>
            </Routes>
            



            {/* <CartComponent cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleRemoveItem={handleRemoveItem}/> */}


        </>
    )
}

export default NavigationStack