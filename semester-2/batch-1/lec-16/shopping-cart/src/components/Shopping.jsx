import { useState } from "react";
import CartItem from "./CartItem";

const Shopping = () => {
  // js logic here
  const [ProdName, setProdName] = useState("");
  const [ProdPrice, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddtoCart = () => {
    if (!ProdName || !ProdPrice) return; //edge case

    const newItem = {
      id: Date.now(), //logically alwasy unique
      name: ProdName,
      price: ProdPrice,
      quantity: 1,
    };

    // cartItems.push(newItem);  wont reflect on screen
    setCartItems([...cartItems, newItem]); // array state updates.
    // console.log(cartItems)

    //clean up
    setProdName("");
    setPrice(0);
  };

  const handleUpdate = (id, newQuantity) => {
    //Update the qn of that item in cartItems
    if (newQuantity < 1) return;

    const newArr = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    setCartItems(newArr);
  };

  const handleRemove = (id) => {
    //remove that item from the cartItems
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
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
        {/* ternanry operator. --->.    arr.length == 0 ? <emtryviewComp> : <componenet2> */}
        {/* using loop render cart items dynamically. */}

        {cartItems.length === 0 ? (
          <div className="empty-cart">your cart is empty</div>
        ) : (
          <div>
            {cartItems.map((singleItem) => (
              <CartItem
                item={singleItem}
                OnUpdateQuantity={handleUpdate}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
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
