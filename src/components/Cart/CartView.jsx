import React from 'react'
import { useCart } from '../CartProvider/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './styles.module.css'

export default function CartView() {
  const { cartItems } = useCart()

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} className={styles['carrito']}>
                <CartItem id={item.id} rutaImagen={item.rutaImagen} nombre={item.nombre} artista={item.artista} precio={item.precio} unidades={item.unidades}/>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}




















/* import { collection } from "firebase/firestore"
import { db } from "../../firebase/client"


export default function CartView () {
    const createOrder = () => {
        const order = {
            buyer: {name: "fernando" , phone: "123123123", email: "fer@fer.com"},
            items: products [0],
            total : products[0].price
        }

    }
    const orderCollection = collection(db, 'orders')
    
} */