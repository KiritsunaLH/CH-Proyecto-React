import {useState} from 'react';

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    const handlerInc = () => {
        setCount(count + 1)
    }
    const handlerRm = () => {
        setCount(count - 1)
    }
    const handlerOnAdd=()=> {
        onAdd(count)
        setCount(initial)
    }

    return (
        <div className="w-50">
            <button className="btn btn-primary" onClick={handlerInc}>+</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={handlerRm}>-</button>
            <button className="btn btn-primary" onClick={handlerOnAdd}>Agregar</button>
        </div>
    )
}

export default ItemCount
