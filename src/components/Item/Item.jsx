
import {Link} from 'react-router-dom'


const Item = ({item}) => {

    return (
        <>
            <div key={item.id} className='card w-50 mt-2'>
                <div className="card-header">
                    {item.name}
                </div>
                <div className="card-body">
                    <img src={item.url} alt='imagen' className='w-25' />
                </div>
                <div className="card-footer">
                    {`Price ${item.price}`}<br/>
                    <Link to="/detail">
                        <buttom className="btn btn-outline-primary">Detail</buttom>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
