import React, { createContext, useState, useContext, useEffect } from 'react'
import { mostrarToastInfo, mostrarToastBueno } from '../Alerts/Alerts'

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
    if (productoExistente) {
      if (productoExistente.unidades < producto.stock) {
        setCartItems((itemAgregado) =>
          itemAgregado.map((item) =>
            item.id === producto.id
              ? { ...item, unidades: item.unidades + 1, subtotal: (item.unidades + 1) * item.precio }
              : item
          )

        )
        mostrarToastBueno('Agregado al carrito!')
      } else {
        mostrarToastInfo('No se puede agregar más unidades!')
      }

    } else {
      setCartItems([...cartItems, { ...producto, unidades: parseInt(producto.unidades), subtotal: parseInt(producto.unidades) * producto.precio }])
      mostrarToastBueno('Agregado al carrito!')

    }

  }

  const eliminarDelCarrito = (productId) => {
    const actualizarCarrito = cartItems.filter((item) => item.id !== productId)
    setCartItems(actualizarCarrito)
  }

  const actualizarUnidades = (producto) => {
    if (producto.nuevo <= producto.stock) {
      setCartItems((itemAgregado) =>
        itemAgregado.map((item) =>
          item.id === producto.id
            ? { ...item, unidades: producto.nuevo, subtotal: producto.nuevo * item.precio }
            : item
        )
      )
    } else {
      mostrarToastInfo('No se puede agregar más unidades!')
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, agregarACarrito, eliminarDelCarrito, montoFinal, actualizarUnidades, totalCarrito }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export const totalCarrito = (carrito) => {
  return carrito.reduce((total, item) => total + item.unidades, 0)
}
