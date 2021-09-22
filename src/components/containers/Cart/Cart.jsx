import { useCartContext } from "../../AppContext/CartContext"


const Cart = () => {

    const {cartDelete, removeItem, totalPrice, cart} = useCartContext() 


    return (
        <div>
            {cart.map(cart =><div> 
                <p>{ cart.item.name}</p>
                <p>{ cart.quantity}</p>
                <button onClick={removeItem}>Remove Item</button>
                </div>
                )}
            {totalPrice()}
            <button onClick={cartDelete}>Remove cart list</button>
        </div>

    )
}

export default Cart
