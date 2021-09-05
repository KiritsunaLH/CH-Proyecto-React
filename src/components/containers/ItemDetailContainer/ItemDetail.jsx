function ItemDetail( props ) {
    const { producto} = props
    return (
        <>
            <label>Soy el detalle</label>
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
        </>
    )
}

export default ItemDetail
