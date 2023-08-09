// importación de estilos css a mi componente
import styles from './styles.module.css'
// el prop greeting lo recibo de App.js
const ItemListContainer = ({greeting}) => {

    return(
        <div className={styles['saludo']}>
            <p >{greeting}</p>
        </div>
    )
}

export default ItemListContainer // exporto el componente