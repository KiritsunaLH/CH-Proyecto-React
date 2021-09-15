
import React, {useContext} from "react";

import { CartContext } from "../../AppContext/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import {Col, Row} from "react-bootstrap";


const ItemDetail = ({producto}) => {

    const { setCart, addItem } = useContext(CartContext);

    const onAdd = (count) => {
    setCart(count);
    addItem(producto, count);
    // console.log(count);
  };

    return (
        <>
        <Row>
            <label>Soy el detalle</label>
            <Col>
            <div className='card w-50'>
                <div className="container">
                    <label>{producto.name}</label>
                </div>
                <div className="container">
                    <img  src={producto.url} alt="" className="w-25" />
                    <br/>
                    <label>{producto.descripcion}</label>
                </div>
                <div className="container">
                    <label>{producto.price}</label>
                </div>
            </div>
            </Col>
            <Col>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail
