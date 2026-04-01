import React from "react";

const CartItems = () => {
  return (
    <>
      <div className="cart-item">
        <div className="item-name">Apple</div>
        <div className="item-price">210.00</div>
        <div className="item-quantity">
          <button>-</button>5<button>+</button>
        </div>
        <div className="item-total">$850</div>
        <div className="item-actions">
          <button className="remove-btn">remove</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
