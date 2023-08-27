import styles from './styles.module.css'
const ItemListContainer = ({greeting}) => {

    return(
        <div className={styles['saludo']}>
            <p >{greeting}</p>
        </div>
    )
}

export default ItemListContainer 