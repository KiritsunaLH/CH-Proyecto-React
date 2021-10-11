import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../../../src/components/ItemList/ItemList'
import { getFirestore } from '../../../service/getFirebase'




const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { cat } = useParams();
  
    useEffect(() => {
      const db = getFirestore();
      const iCollection = db.collection("Products");
  
      if (cat) {
        const filter = iCollection.where("category", "==", cat);
        const promFilter = filter.get();
  
        promFilter.then((snapshot) => {
          if (snapshot.size > 0) {
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
          }
        });
      } else {
        const prom = iCollection.get();
        prom.then((snapshot) => {
          if (snapshot.size > 0) {
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
          }
        });
      }
    }, [cat]);

    

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
