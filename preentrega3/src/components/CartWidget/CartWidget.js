import './CartWidget.css'
import React, { useContext } from 'react';
import compra from './assets/compra.png';
import { CartConext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {
  const  {cart} = useContext(CartConext)

  const quantityTotal = () => {
    const total = cart.reduce((accumulator, product) => {
      return (accumulator + product.quantity);
    }, 0);
    return total;
};

  return (
    <Link to='/cart' className='CartWidget' /* style={{ display: totalQuantity > 0 ? 'block' : 'none' }} */>
      <img src={compra} alt="cart-widget" className='CartImg' width="35px"/>
      {quantityTotal()}
    </Link>
  );
};

export default CartWidget;
