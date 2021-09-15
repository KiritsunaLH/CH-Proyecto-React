import {memo} from 'react'
import Item from '../../../src/components/Item/Item'

const ItemList =memo(({items}) => {
    return (
        <>
           <ul>
                { items.map((item)=>  <Item item={item} />  )  }
            </ul>   
        </>
    )
},
(oldProps, newProps)=> oldProps.items.length === newProps.items.length) 

export default ItemList
