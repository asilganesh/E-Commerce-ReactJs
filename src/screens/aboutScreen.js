import { useDispatch, useSelector } from "react-redux"
import NavbarComponent from "../Compnents/navbar"
import { searchBy } from "../redux/action"


const AboutScreenComponent = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const handleSearch = (e) => {


        dispatch(searchBy(e.target.value))
    }

    return (
        <>
            <div style={{ position: "fixed", zIndex: "1", width: "99vw", marginTop: "-50px" }}>

                <NavbarComponent handleSearch={handleSearch} cart={cart} />
            </div>
            <div class="container p-5 my-5 bg-dark text-white mt-10"  >
                <h3 >
                    E-Kart Dot Com is a thriving online e-commerce platform offering customers a convenient and comprehensive shopping experience. Serving as a one-stop destination, it caters to a wide array of needs by providing a diverse range of essential items. From household necessities to personal care products, electronics, clothing, and beyond, E-Kart Dot Com ensures that customers have access to all their required items in one place. The platform's user-friendly interface simplifies the shopping process, allowing customers to browse and purchase products with ease. E-Kart Dot Com prioritizes customer satisfaction, offering reliable delivery services and secure payment options. With a commitment to quality and convenience, it has garnered a loyal customer base who rely on the platform for their everyday shopping needs. E-Kart Dot Com represents the evolving landscape of retail, harnessing the power of technology to provide an efficient and accessible platform for online shopping.
                </h3>
            </div>

        </>
    )
}

export default AboutScreenComponent