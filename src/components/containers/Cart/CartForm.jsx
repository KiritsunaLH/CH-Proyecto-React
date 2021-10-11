import { useCartContext } from "../../AppContext/CartContext"
import { useState } from "react";
import { getFirestore } from "../../../service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore'


const CartForm = () => {

    const [formData, setFormData] = useState(inatialState)

    const {cart , totalPrice, cartDelete} = useCartContext() 


    function handleChange(e) {        
        
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }
    

    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            itmes: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        console.log(newOrder)


        const db = getFirestore()
        const orders = db.collection('orders')

        orders.add(newOrder)
        .then(resp => alert(`Your buying order is: ${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormData(inatialState)
            cartDelete()
        })
    }
    
    return (
        <div>
           {cart.map(product =>  <div> 
                                    <p>{ product.item.name}</p>
                                    <p>{ product.quantity}</p>
                                </div>
            )}
            {totalPrice()}
            <br/>

            <form 
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                <input type="text"  placeholder="Name" name="name" value={formData.name}/>
                <input type="text"  placeholder="Phone" name="phone" value={formData.phone} />
                <input type="email" placeholder="E-mail" name="email" value={formData.email} />
                <input type="email" placeholder="confirm E-mail" name="email2" />
                <button>End Purchase</button>
                
            </form>
            <br />
            <button>Delete the List</button>
        </div>
    )
}

export default CartForm


const inatialState = {
    name: '',
    email:'',
    phone:''
}