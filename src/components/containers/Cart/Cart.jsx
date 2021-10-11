import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import { useCartContext} from '../../AppContext/CartContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CartForm from '../Cart/CartForm'
import ListGroup from 'react-bootstrap/ListGroup'


export const Cart = () => {

    const {cart, deleteCart, removeItem, totalPrice} = useCartContext()

    let cartFull = false

    if (cart.length ===  0){
        cartFull=true
    }
 

    return (
        <Container>
            
        <div>
            <h2>Shopping Cart</h2>
            <ListGroup variant='flush'>
            {cart.map((prod)=> 
                 <ListGroup.Item  key={prod.id}  >
                    <Image className='img-carrito' src={prod.item.imageID} rounded />
                    <div>
                        <h4>{prod.item.name} </h4>
                        <p>Quant: {prod.quantity} / Precio: $ {prod.item.price*prod.quantity}</p>
                        <p></p>                        
                    </div>
                    <Button onClick={()=>removeItem(prod.item.id)} variant='danger' style={{height:'3rem'}}> X </Button>
                </ListGroup.Item>)}
            </ListGroup>
        </div>
        {cartFull ?
        <>
        <h3>Your cart is empty...</h3>
        <Link to='/'><Button variant='success'>Keep Shopping</Button></Link>
        </>:
        <>
            <p className='total'>Total: $ {totalPrice()}</p>

            <CartForm/>
            <div>
                <Button variant='success'><Link className='text-decoration-none' to='/'>Keep Shopping</Link></Button>
                <Button variant='danger' onClick={deleteCart}>Delete List</Button>
            </div>
        </>}


        </Container>
    )
};