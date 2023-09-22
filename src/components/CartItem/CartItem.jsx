import styles from './styles.module.css'
import botones from '../ItemCount/style.module.css'
import { useCart } from '../CartProvider/CartProvider'
import { useState, useEffect } from 'react'

export default function CartItem({ id, rutaImagen, nombre, precio, unidades, subtotal, stock }) {
  const { eliminarDelCarrito, actualizarUnidades } = useCart()
  const [cantidad, setCantidad] = useState(unidades);


  const actualizar = (nuevo) => {
    if (nuevo >= 1 && nuevo <= stock) {
      setCantidad(nuevo);
      const producto = {
        id: id,
        unidades: unidades,
        stock: stock,
        nuevo: nuevo,
      };
      actualizarUnidades(producto);
    } else {
      console.log("Te pasaste macho");
    }
  };


  const eliminarProducto = () => {
    eliminarDelCarrito(id)
  }



  return (
    <div className={styles['descripcion']}>
      <img src={rutaImagen} alt={nombre} className={styles['imagenCarrito']} />
      <p>{nombre}</p>
      <p>Precio: ${precio}</p>
      <p>
        Unidades: {cantidad}{' '}
        <button onClick={() => actualizar(cantidad + 1)} className={botones['aumentar']}>+</button>{' '}
        <button onClick={() => actualizar(cantidad - 1)} className={botones['disminuir']}>-</button>
      </p>
      <p>Subtotal: ${subtotal}</p>
      <button onClick={eliminarProducto} className={styles['boton']}>Eliminar</button>
    </div>

  )
}


/**
 *         <button onClick={incrementarCantidad} className={botones['aumentar']}>+</button>{' '}
        <button onClick={decrementarCantidad} className={botones['disminuir']}>-</button>
        <button onClick={actualizar} className={botones['agregar']}>Actualizar</button>
 * 
 * 
 * 
 */