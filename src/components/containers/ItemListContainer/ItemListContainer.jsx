import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../../../src/components/ItemList/ItemList'
import { getFirestore } from '../../../service/getFirebase'




function ItemListContainer() {
    const [items, setItems] = useState([])
    const { category } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const itemDB = db.collection("Products")
        itemDB.get()
        .then(data => {
            if(data.size===0){
                console.log('Nothing is here')
            }
            setItems(data.docs.map(item => ({id: item.id, ...item.data()})))

        })
    }, [category])
/*
        if (category === undefined) {
            task
                .then((resp) => setItems(resp))     //guardar en el estado
        } else {
            task
                .then((resp) => setItems(resp.filter(r => category === r.categoria)))
        }
    }, [category])

    console.log(items)
*/
    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
