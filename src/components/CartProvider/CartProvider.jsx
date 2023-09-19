import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const agregarACarrito = (producto) => {
    const productoExistente = cartItems.find((item) => item.id === producto.id)
    if (productoExistente){
        setCartItems((itemAgregado) =>
        itemAgregado.map((item) =>
          item.id === producto.id
            ? { ...item, unidades: item.unidades + 1 }
            : item
        )
      )
    } else {
        setCartItems([...cartItems, {...producto, unidades: 1}])
    }

  }

  return (
    <CartContext.Provider value={{ cartItems, agregarACarrito }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}