import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [montoFinal, setMontoFinal] = useState(0)


  useEffect(() => {
    const nuevoMontoFinal = cartItems.reduce((total, item) => {
      return total + item.precio * item.unidades
    }, 0)
    setMontoFinal(nuevoMontoFinal)
  }, [cartItems])

  const agregarACarrito = (producto) => {
    const productoExistente = cartItems.find((item) => item.id === producto.id)
    if (productoExistente){
      if(productoExistente.unidades < producto.stock){
          setCartItems((itemAgregado) =>
        itemAgregado.map((item) =>
          item.id === producto.id
            ? { ...item, unidades: item.unidades + 1 }
            : item
        )
      )
      } else {
        console.log("Te pasaste macho")
      }
      
    } else {
        setCartItems([...cartItems, {...producto, unidades: parseInt(producto.unidades)}]) 
    }

  }

  const eliminarDelCarrito = (productId) => {
    const actualizarCarrito = cartItems.filter((item) => item.id !== productId)
    setCartItems(actualizarCarrito)
  }

  return (
    <CartContext.Provider value={{ cartItems, agregarACarrito, eliminarDelCarrito, montoFinal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}