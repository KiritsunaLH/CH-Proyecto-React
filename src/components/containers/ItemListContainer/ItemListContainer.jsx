import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { task } from '../../../../src/utils/promises'
import ItemList from '../../../../src/components/ItemList/ItemList'


function ItemListContainer() {
    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {

        if (category === undefined) {
            task
                .then((resp) => setItems(resp))     //guardar en el estado
        } else {
            task
                .then((resp) => setItems(resp.filter(r => category === r.categoria)))
        }
    }, [category])

    console.log(items)

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
