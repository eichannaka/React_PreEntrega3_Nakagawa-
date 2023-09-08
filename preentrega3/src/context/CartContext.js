import { useState, createContext } from "react"

export const CartConext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error("El producto ya esta agregado");
        }
    }
    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.i !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    return (
        <CartConext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartConext.Provider>
    )
}