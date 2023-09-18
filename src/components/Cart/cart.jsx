import { collection } from "firebase/firestore"
import { db } from "../../firebase/client"


export default function Cart () {
    const createOrder = () => {
        const order = {
            buyer: {name: "fernando" , phone: "123123123", email: "fer@fer.com"},
            items: products [0],
            total : products[0].price
        }

    }
    const orderCollection = collection(db, 'orders')
    
}