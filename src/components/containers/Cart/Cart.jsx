import { useCartContext } from "../../AppContext/CartContext"


const Cart = () => {

    const {removeList} = useCartContext() 

    

    return (
        <div>
           cart
           <button onClick={removeList} >Remove cart list</button>
        </div>
    )
}

export default Cart
