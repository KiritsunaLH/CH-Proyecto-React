import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { task } from "../../../../src/utils/promises";

import  ItemDetail  from "../../../../src/components/containers/ItemDetailContainer/ItemDetail";
import  SpinnerAnimation from "../../../../src/components/SpinnerAnimation/SpinnerAnimation";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        task.then((response) => {
            setItem(response.find((i) => id === i.id));
            setLoading(false);
        });
    }, [id]);
    

    return (
        <div className="lg:h-1/2 lg:w-1/2 mx-auto">
            {loading ? <SpinnerAnimation /> : <ItemDetail producto={item} />}
        </div>
    );
};

export default ItemDetailContainer;
