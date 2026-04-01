import React from "react";
import CartItems from "./CartItems";
import { useState } from "react";

const Shopping = () => {
  // js logic here
  const [ProdName, setProdName] = useState("");
  const [ProdPrice, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

const handleAddtoCart =()=> {
    //logic

    
}


  return (
    <>
      Hello testing
      {/* UI structure here*/}
      {/* 1 input section */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="input-section">
          <h2>Add Products</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Product Name"
              value={ProdName}
              onChange={(e) => setProdName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              step={0.5}
              min={0}
              value={ProdPrice}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      {/* 2.cart section */}
      <div className="cart-section">
        <h2>You cart</h2>
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Actions</span>
        </div>
        {/* using loop render cart items dynamically. */}
        {
          cartItems.length === 0 ? (
            <div className="empty-cart">you cart is empty</div>
          ) : (
            <></>
          )
          //    {cartItems.map(<CartItems/>)} //CART ITEMS ARRAY
        }
        {/* ternanry operator. --->.    arr.length == 0 ? <emtryviewComp> : <componenet2> */}
      </div>
      {/* 3.checkout-footer */}
      <div className="cart-footer">
        <div className="cart-total">Total : 1000/-</div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </>
  );
};

export default Shopping;
