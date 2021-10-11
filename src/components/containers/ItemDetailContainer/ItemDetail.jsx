
import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import { CartContext } from "../../AppContext/CartContext";
import ItemCount from "../../ItemCount/ItemCount";


const ItemDetail = ({item}) => {
    
    const [count, setCount] = useState(0);

    const { addItem } = useContext(CartContext);

    const addHandler = counter => {
        setCount(counter);
    };

    const finishPurchase = () => {
    addItem(item, count);
    console.log(item);
    };

    
    return (
        
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={item.imageID} alt='item image' />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">$ {item.price}</small>
                </Card.Footer>
                <div className="mb-4">
                    {count === 0 ? (
                    <ItemCount stock={item.stock} initial="1" onAdd={addHandler}
                    />
                    ) : (
                        <Button onClick={finishPurchase} as={Link} to={"/cart"} variant="btn btn-outline-secondary " size="lg">
                        Add to Cart
                        </Button>
                    )}
                </div>
                <Link  to={`/`} >
                    <Button variant="btn btn-outline-secondary" size="sm">
                        Home
                    </Button>
                </Link>
            </Card>
        </CardGroup>
    )
}

export default ItemDetail