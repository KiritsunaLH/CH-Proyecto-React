import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../../service/getFirebase';
import  ItemDetail  from "../../../../src/components/containers/ItemDetailContainer/ItemDetail";
import  SpinnerAnimation from "../../../../src/components/SpinnerAnimation/SpinnerAnimation";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);


  const getItems = (id) => {
    const db = getFirestore();
    const iCollection = db.collection("Products");

    
    const item = iCollection.doc(id);
    console.log('firebase', item);
    return item.get();

  };

  useEffect(() => {
    getItems(detailId).then((res) => {
      if (res.exists) {
        setItem({ id: res.id, ...res.data() });
        setLoading(false)
      }
    });
    return;
  }, [detailId]);

    return (
        <div className="lg:h-1/2 lg:w-1/2 mx-auto">
            {loading ? <SpinnerAnimation /> : <ItemDetail producto={item} />}
        </div>
    );
};

export default ItemDetailContainer;
