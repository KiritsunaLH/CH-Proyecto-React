import React from 'react'
import Item from '../../../src/components/Item/Item'

function ItemList({items}) {
    return (
        <>
           <ul>
                { items.map((item)=>  <Item item={item} />  )  }
            </ul>   
        </>
    )
}

export default ItemList
