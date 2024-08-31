import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping...
              </Link>
            </div>
          </>
        ) : (
          cart.map((p, i) => {
            return (
              <>
                <div key={i} className="card mb-3" style={{ width: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={p.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                        <button className="btn btn-primary mx-3">
                          {p.price} ₹
                        </button>
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="btn btn-warning mx-5">CheckOut</button>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
