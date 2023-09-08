import React from 'react';
import './CartItem.css' 

const CartItem = ({ id, name, price, quantity }) => {

  return (
    <div className="CartItem">
      <div>Id producto:{id}</div>
      <div>{name}</div>
      <div>Precio: ${price}</div>
      <div>Cantidad: {quantity}</div>
    </div>
  );
};

export default CartItem;
