

import styles from "./products.module.css"



const ProductsComponent = ({ products, handleAddToCart }) => {

    console.log(products)
    return (


        <>
            <div className={styles.container} > 
                {
                    products.length > 0
                        ?

                        products.map(product => <>
                            <div className="card" style={{ width: 400, display:"flex",flexFlow:"row",gap:"5%",padding:"2%" }}>
                                <img className="card-img-top" src={product.image} alt="Card image"  style={{width:"100px"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">{product.title.slice(0,10)}</h4>
                                    <p className="card-text">Price: {parseInt(product.price)}₹</p>

                                    <button className="btn btn-primary" id={product.id} onClick={() => handleAddToCart(product)}>
                                        {product.productInCart ? "Added to Cart" : "Add to Cart"}</button>

                                </div>
                            </div>


                        </>)
                        :
                        <h1>Loading...</h1>
                }
            </div>
        </>
    )
}

export default ProductsComponent