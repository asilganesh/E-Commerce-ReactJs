
import { Link } from "react-router-dom"
import cartimage from "../images/shopping-cart.png"

const NavbarComponent = ({ handleSearch, cart }) => {



  return (

    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ position: "sticky" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            E-Kart<span style={{color:"orange"}}>DotCom</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" href="javascript:void(0)">Home</Link>

              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link" href="javascript:void(0)">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus"className="nav-link" href="javascript:void(0)">
                  About us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" onChange={handleSearch} />
              {/* <button className="btn btn-primary" type="button">
          Search
        </button> */}
            </form>
            {/* <button className="btn btn-primary m-2" type="button">
          Cart: {cart.length}
        </button> */}

            {/* <img src={cartimage} width={50} className="btn btn-primary m-2" ></img> */}

            <Link to="/cart" className="position-relative">
              <img src={cartimage} alt="Cart" width={50} className="btn btn-primary m-2 " />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ">
                  {cart.length}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavbarComponent