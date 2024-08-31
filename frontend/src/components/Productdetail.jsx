import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const Productdetail = ({cart,setCart}) => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [relatedproduct, setRelatedproduct] = useState([]);

  useEffect(() => {
    const Filterproduct = items.filter((product) => product.id == id);
    console.log(Filterproduct);
    setProducts(Filterproduct[0]);

    const relatedproduct = items.filter(
      (relapro) => relapro.category === products.category
    );
    setRelatedproduct(relatedproduct);
  }, [id, products.category]);
  
  return (
    <>
      <div className="container productd">
        <div className="imgs">
          <img src={products.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{products.title}</h1>
          <p className="card-text">{products.description}</p>
          <button className="btn btn-primary mx-3">{products.price} ₹</button>
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>
      <h1 className="text-center">Related product</h1>
      <Product  cart={cart} setCart={setCart} items={relatedproduct}/>
    </>
  );
};

export default Productdetail;
