import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>{price}€</div>
      <div>
        <button onClick={() => updateQty(id, qty - 1)} disabled={qty <= 0}>
          -
        </button>
        {qty}
        <button onClick={() => updateQty(id, qty + 1)}>+</button>
      </div>
      <div>Total: {(qty * price).toFixed(2)}€</div>
    </div>
  );
}

export default CartItem;
