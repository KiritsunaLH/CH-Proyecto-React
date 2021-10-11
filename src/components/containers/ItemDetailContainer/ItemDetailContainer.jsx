import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../../service/getFirebase';
import  ItemDetail  from "../../../../src/components/containers/ItemDetailContainer/ItemDetail";
import  SpinnerAnimation from "../../../../src/components/SpinnerAnimation/SpinnerAnimation";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()
    const cDB = db.collection('Products');
    cDB.doc(`${detailId}`).get()
    .then((data)=> {
      setItem({id: data.data(), ...data.data()})
      setLoading(false)
    })
     
  }, [detailId])

    return (
        <div className="lg:h-1/2 lg:w-1/2 mx-auto">
            {loading ? <SpinnerAnimation /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
