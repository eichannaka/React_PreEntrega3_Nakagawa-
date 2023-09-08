import './Cart.css'
import React, { useContext } from 'react'
import { CartConext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'



const Cart = () => {
    const { cart, clearCart } = useContext(CartConext)
    const Total = () => {
        const total = cart.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
        }, 0);

        return total;
    };
    return (
        <div className='cart'>
            {cart.map(p => <CartItem key={p.id}{...p} />)}
            <h3>Total a pagar: $ {Total()}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
            <Link to='/' className='Option'>Checkout</Link>
        </div>
    )
}
export default Cart;


