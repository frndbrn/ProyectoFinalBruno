import { useState } from 'react'
import { mostrarAlertaError } from '../Alerts/Alerts'
import { db } from '../../firebase/client'
import { getDoc, doc } from 'firebase/firestore'
import styles from './style.module.css'


export default function Historial() {
    const [idCompra, setIdCompra] = useState('')
    const [documento, setDocumento] = useState(null)

    const handleIdCompraChange = (e) => {
        setIdCompra(e.target.value)
    }


    const buscarDocumento = () => {
        const ordenDeCompra = doc(db, "orders", idCompra)
        getDoc(ordenDeCompra)
            .then((snapshot => {
                if (snapshot.exists()) {
                    const ordenFiltrada = { id: snapshot.id, ...snapshot.data() }
                    setDocumento(ordenFiltrada)
                } else {
                    mostrarAlertaError()
                }
            }))
            .catch(() => {
                mostrarAlertaError()
            })
    }





    return (
        <div className={styles['historial']}>
            <h2>Historial de Compras</h2>
            <label htmlFor="idCompra">ID de Compra:</label>
            <input
                type="text"
                id="idCompra"
                value={idCompra}
                onChange={handleIdCompraChange}
            />
            <button onClick={buscarDocumento}>Buscar</button>

            {documento && (
                <div>
                    <h3 className={styles['informacion']}>Información del Comprador</h3>
                    <p>Nombre: {documento.buyer.nombre}</p>
                    <p>Teléfono: {documento.buyer.telefono}</p>
                    <p>Correo Electrónico: {documento.buyer.email}</p>

                    <h3 className={styles['informacion']}>Ítems Comprados</h3>
                    <ul className={styles['lista']}>
                        {documento.items.map((item, index) => (
                            <li key={index} className={styles['item']}>
                                <p>Nombre del ítem: {item.nombre}</p>
                                <p>Unidades: {item.unidades}</p>
                                <p>Subtotal: {item.subtotal}</p>
                            </li>
                        ))}
                    </ul>

                    <h3 className={styles['total']}>Total de la Compra</h3>
                    <p className={styles['precio']}>Total: ${documento.total}</p>
                </div>
            )}
        </div>
    )
}


