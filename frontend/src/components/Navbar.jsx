import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setData,cart }) => {
  const location = useLocation()
  const navigate = useNavigate();
  const [searchterm, setSearchterm] = useState("");

  const filterbyCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterbyprice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setSearchterm("");
  };

  return (
    <>
      <header>
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              value={searchterm}
              onChange={(e) => setSearchterm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
          location.pathname == "/" && (
            <div className="nav-bar-wrapper">
            <div className="items">Filter by</div>
            <div onClick={() => setData(items)} className="items">
              No filter
            </div>
            <div onClick={() => filterbyCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div onClick={() => filterbyCategory("laptops")} className="items">
              Laptops
            </div>
            <div onClick={() => filterbyCategory("tablets")} className="items">
              Tablets
            </div>
            <div onClick={() => filterbyprice(29999)} className="items">
              29999
            </div>
            <div onClick={() => filterbyprice(49999)} className="items">
              49999
            </div>
            <div onClick={() => filterbyprice(69999)} className="items">
              69999
            </div>
            <div onClick={() => filterbyprice(89999)} className="items">
              89999
            </div>
          </div>
          )
        }
       
      </header>
    </>
  );
};

export default Navbar;
