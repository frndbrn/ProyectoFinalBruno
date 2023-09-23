import React, { useState } from 'react'
import 'firebase/firestore'
import { db } from '../../firebase/client'
import { addDoc, collection } from 'firebase/firestore'
import { useCart } from '../CartProvider/CartProvider'
import styles from './styles.module.css'
import { mostrarAlertaExitosa } from '../Alerts/Alerts'


export default function CheckoutPage() {
    const { cartItems, montoFinal, eliminarDelCarrito } = useCart()
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')



    const createOrder = () => {

        const itemsParaMostrar = cartItems.map((item) => ({
            nombre: item.nombre,
            unidades: item.unidades,
            subtotal: item.subtotal,
        }))

        const datosCompra = {
            buyer: { nombre, telefono, email, },
            items: itemsParaMostrar,
            total: montoFinal
        }


        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, datosCompra).then(({ id }) => {
            Promise.all(cartItems.map((item) => eliminarDelCarrito(item.id)))
                .then(() => {
                    mostrarAlertaExitosa(id)
                })

        })
    }


    const handleNombreChange = (e) => {
        setNombre(e.target.value)
    }

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        createOrder()

    }

    return (
        <div className={styles['checkout-container']}>
            <div className={styles['checkout']}>
                <h2>Finalización de Compra</h2>
                <div>
                    <h3>Monto final a pagar: ${montoFinal}</h3>
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={handleNombreChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                value={telefono}
                                onChange={handleTelefonoChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <button type="submit">Finalizar compra</button>
                    </form>

                </div>

            </div>
        </div>

    )


}


