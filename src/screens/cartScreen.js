
import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { addToCart, category, decrement, fetchProducts, increment, removeFromCart, searchBy } from "../redux/action"
import CategoryComponent from "../Compnents/category"
import ProductsComponent from "../Compnents/productsDetails"
import NavbarComponent from "../Compnents/navbar"
import CartComponent from "../Compnents/cart"


const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)





   

  

    const handleSearch = (e) => {


        dispatch(searchBy(e.target.value))
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

    const totalPrice = cart.reduce((acc, val) => {
        return acc + (val.count * parseInt(val.price));
    }, 0);

    const loadScript=(src)=>{
        return new Promise((resolve)=>{
            const script=document.createElement("script")
            script.src=src

            script.onload=()=>{
                resolve(true)
            }

            script.onerror=()=>{
                resolve(false)
            }

            document.body.appendChild(script)
        })

    }

    const displayRazorpay= async(amount)=>{

        const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!res){
            alert("Youre are Offline, Failed to Load")
            return 
        }

        const options={
            key: "rzp_test_pfT68y3HSv5bW8",
            currency: "INR",
            amount: amount * 100,
            name: "Ekartdotkom",
            description: "thanks for purchasing",
            payment_capture: '1', // Auto-capture payment
            handler: function(response) {
                alert(`Payment Successful with paymentId: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Ekart Dot kom"
            }
           
        };

        const paymentObject=new window.Razorpay(options)
        paymentObject.open()


    }

    return (

        <>

        
            <div style={{ position: "sticky", zIndex: "1", width: "100vw",marginBottom:"10px"}}>

                <NavbarComponent handleSearch={handleSearch} cart={cart} />
            </div>
            <div class="container-fluid p-4 my-2 bg-dark text-white rounded-3 fs-5" style={{wordSpacing:"5px",display:"flex",justifyContent:"space-between"}}>
                <p >Total Price : <b style={{marginLeft:"2px"}}>{totalPrice}₹</b></p>

            {/* <p style={{color:"orange", border:"1px solid orange",padding:"1px",}}>Click Here to Checkout</p> */}

            <button style={{padding:"5px",}} className="btn btn-primary" onClick={()=>{
                displayRazorpay(totalPrice)
            }}>Click Here to Checkout</button>
            </div>

            <div >
            <CartComponent cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleRemoveItem={handleRemoveItem} />

            </div> 

       </>
    )
}

export default Cart