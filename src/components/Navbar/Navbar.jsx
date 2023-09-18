import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Navbar () {
    return (
        <div className={styles['menu']}>
            <Link to='/' className={styles['logo']}>Coder Records</Link>
            <div className={styles['categorias']}>
            <Link to='/categoria/rock' className={styles['boton']}>Rock</Link>
            <Link to='/categoria/electronica'className={styles['boton']}>Electronica</Link>
            <Link to='/categoria/jazz'className={styles['boton']}>Jazz</Link>
            <Link to='/categoria/pop'className={styles['boton']}>Pop</Link>
            <Link to='/carrito' className={styles['boton']}>Ver carrito</Link>
            </div>
            <CartWidget />
        </div>
    )}


