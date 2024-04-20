


const CartComponent = ({ handleIncrement, handleDecrement, handleRemoveItem, cart }) => {

    return (

        <>

        <div style={{display:"grid",gridTemplateColumns:"auto auto auto ", justifyContent:"space-evenly",gap:"2%"}}>
            {
                cart.length > 0
                    ?
                    cart.map(product => <>




                        < div className="card" style={{ width: 400, display: "flex", flexFlow: "row", gap: "5%", padding: "2%"}}>
                            <img className="card-img-top" src={product.image} alt="Card image" style={{ width: "150px", height: "" }} />
                            <div className="card-body" >
                                <h4 className="card-title">{product.title.slice(0, 10)}</h4>
                                <p className="card-text">Price: <b>{parseInt(product.price)} ₹</b></p>
                                <p className="card-text">Total Price: <b>{parseInt(product.price)*product.count} ₹</b></p>
                                <button  className="btn btn-primary"  onClick={() => handleRemoveItem(product)}>Remove from Cart</button>
                            <div style={{margin:"2px"}}>
                                <button onClick={() => handleDecrement(product)} className="btn btn-primary" >-</button>
                                <span style={{marginRight:"20px",marginLeft:"20px"}}><b>{product.count}</b></span>
                                <button onClick={() => handleIncrement(product)} className="btn btn-primary" >+</button>
                            </div>

                            </div>
                           
                        </div >
                    </>)
                    :
                    <h1>No Products in Cart</h1>

            }
</div>
        </>
    )
}

export default CartComponent