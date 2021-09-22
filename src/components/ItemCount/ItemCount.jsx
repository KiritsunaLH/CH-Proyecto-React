import {useState} from 'react';
import { Link } from 'react-router-dom'

export const ItemCount = ({stock, onAdd}) => {
    
    const initial = 1;
    const [count, setCount] = useState(initial);
    const [buttonStyle, setButtonStyle] = useState(false)
    
    const handlerInc = () => {
        setCount(count +1)
    };
    const handlerRm = () => {
        if(count > initial) setCount(count - 1)
    };

    const handlerOnAdd=()=> {
        onAdd(count)
        setCount(initial)
        setButtonStyle(true)
    }

    return (
        <div className="w-50">
            <button className="btn btn-primary" onClick={handlerInc}>+</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={handlerRm}>-</button>
        {
            buttonStyle && 
            <div>
                <Link to='/cart'>
                    <button className="btn btn-outline-primary btn-block">Terminar compra</button>
                </Link>
                <Link to='/'>
                    <button className="btn btn-outline-primary btn-block">Segir comprando</button>
                </Link>
            </div>
        }
        {!buttonStyle && <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>}
        </div>
    )
}

export default ItemCount
