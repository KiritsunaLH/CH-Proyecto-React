import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../../../src/components/ItemList/ItemList'
import { getFirestore } from '../../../service/getFirebase'




const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { cat } = useParams();
  
    useEffect(() => {
      const db = getFirestore()
      const iCollection = db.collection('Products').get()
      iCollection.then(data => {
        if(data.size !== 0) {
          console.log("No hay nada")
        }
        setItems( data.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        console.log(data)
      })
      

    }, [cat]);

    

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
