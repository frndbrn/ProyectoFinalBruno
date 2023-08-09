// acá importo el CartWidget ya que va a estar dentro del Navbar
import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.module.css"

const Navbar = () => {

    // basicamente es el nombre del negocio y los botones donde estarán los filtros de categoría
    return (
        <div className={styles['menu']}>
            <h1>Coder Records</h1>
            <button className="btn btn-primary">Rock</button>
            <button className="btn btn-primary">Jazz</button>
            <button className="btn btn-primary">Electrónica</button>
            <button className="btn btn-primary">Pop</button>

            <CartWidget />
        </div>
    )
        // y debajo de esos botones incluyo el CartWidget
}

export default Navbar // exporto el componente