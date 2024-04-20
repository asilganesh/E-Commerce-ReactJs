

const CategoryComponent = ({handleCategory}) => {

    return (

        <>




            <ul class="nav  justify-content-center m-5 p-3 fs-5 d-flex gap-5 text-bg-dark ">
                <li className="nav-item " onClick={()=>handleCategory("all")}>ALL
                </li>

                <li className="nav-item" onClick={()=>handleCategory("men's clothing")}> Men's
                </li>

                <li className="nav-item" onClick={()=>handleCategory("women's clothing")}>Women's
                </li>

                <li className="nav-item" onClick={()=>handleCategory("jewelery")}>Jewelery
                </li>

                <li className="nav-item" onClick={()=>handleCategory("electronics")}>Electronics
                </li>
               
              
            </ul>

        </>
    )
}

export default CategoryComponent