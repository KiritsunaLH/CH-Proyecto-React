
import React, {useContext} from "react";

import { CartContext } from "../../AppContext/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import {Col, Row} from "react-bootstrap";


const ItemDetail = ({product}) => {

    const { setCart, addItem } = useContext(CartContext);

    const onAdd = (count) => {
    setCart(count);
    addItem(product, count);
    // console.log(count);
  };

    return (
        <>
        <Row>
            <label>Soy el detalle</label>
            <Col>
            <div className='card w-50'>
                <div className="container">
                    <label>{product.name}</label>
                </div>
                <div className="container">
                    <img  src={product.url} alt="" className="w-25" />
                    <br/>
                    <label>{product.description}</label>
                </div>
                <div className="container">
                    <label>{product.price}</label>
                </div>
            </div>
            </Col>
            <Col>
            <ItemCount stock={product.stock} onAdd={onAdd} />
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail
