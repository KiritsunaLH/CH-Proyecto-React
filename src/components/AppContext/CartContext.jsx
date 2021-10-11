import {createContext, useState, useContext} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if(isInCart(item.id)) {
			const updateCart = [...cart];

			updateCart.forEach((element) => {
				if(element.item.id === item.id) {
					element.quantity += quantity
				}
			})
			setCart(updateCart)
		} else {
			setCart([...cart, {item, quantity}])
		}
	}
  
	const isInCart = (id) => {
		return cart.find(element => element.item.id === id)
	}

	const removeItem = (itemId) => {
		const cartFilter = cart.filter(element => element.item.id !== itemId)
		return setCart(cartFilter)
	}

	const cartIcon = () => {
		return cart.reduce( (acum, valor)=> acum + valor.quantity, 0) 
	}
  

	const cartDelete=()=>{
        setCart([])
    }       

	const totalPrice = ()=>{
		return cart.reduce((acum, value)=> acum + (value.quantity * value.item.price), 0) 
	}
  

	return(
		<CartContext.Provider value={{
			addItem, 
			removeItem, 
			cartDelete, 
			cartIcon, 
			cart, 
			setCart, 
			totalPrice
		}}>
			{children}
		</CartContext.Provider>
	)
}
