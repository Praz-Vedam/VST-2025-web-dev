import React from "react";

function CartItem({ item, OnUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price.toFixed(2)}</div>
      <div className="item-quantity">
        <button onClick={() => OnUpdateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => OnUpdateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>

      <div className="item-total">
        ₹{(item.price * item.quantity).toFixed(2)}
      </div>
      <div className="item-actions">
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
