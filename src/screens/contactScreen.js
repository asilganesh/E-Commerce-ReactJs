import { useDispatch, useSelector } from "react-redux"
import { searchBy } from "../redux/action"
import NavbarComponent from "../Compnents/navbar"


const ContactScreenComponent = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const handleSearch = (e) => {


        dispatch(searchBy(e.target.value))
    }

    return (
        <>
            <div style={{ position: "sticky", zIndex: "1", width: "100vw", marginTop: "0px" }}>

                <NavbarComponent handleSearch={handleSearch} cart={cart} />
            </div>

            <div style={{marginTop:"100px", textAlign:"center"}}>
            <h1>Please Contack us here <span style={{color:"orange"}}> @ekartdocom@gmail.com</span></h1>
            
            
            </div>
            
        </>
    )
}

export default ContactScreenComponent