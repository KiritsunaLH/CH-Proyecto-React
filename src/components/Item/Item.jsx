import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";


//lo q dibujo en pantalla card de mis datos
const Item = ({ item }) => {
    console.log('item', item);
    
    return (
        <Card>
            <Card.Img variant="top" src={item.imageID} className="card w-50 mt-2" />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to={`/detail/${item.id}`}>
                        <button className="btn btn-outline-primary">Details</button>
                    </Link>
            </Card.Footer>
        </Card>
    );
}
 
export default Item;