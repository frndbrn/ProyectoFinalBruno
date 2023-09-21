import React from 'react'
import { useCart } from '../CartProvider/CartProvider'
import CartItem from '../CartItem/CartItem'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import CheckoutPage from '../Checkout/Checkout'

export default function CartView() {
  const { cartItems } = useCart()

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className={styles['carrito']}>
          {cartItems.map((item) => (
            <div key={item.id} >
              <CartItem id={item.id} rutaImagen={item.rutaImagen} nombre={item.nombre} precio={item.precio} unidades={item.unidades} />
            </div>
          ))}
          <div>
            <Link to="/checkout">
              <button>Ir a la Finalización de Compra</button>
            </Link>
          </div>
        </div>

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