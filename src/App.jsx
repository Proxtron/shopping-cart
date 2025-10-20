import { Outlet } from 'react-router';
import Header from './layout/Header'
import { useState } from 'react';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const numberInCart = itemsInCart.reduce((acc, item) => acc + item.amount, 0);

  function addItemsToCart(item, amount) {
    const itemIndex = itemsInCart.findIndex((itemInCart) => itemInCart.id === item.id);

    //itemIndex is -1: means the item is not in the cart
    if(itemIndex < 0) {
      setItemsInCart([
        ...itemsInCart,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          amount: amount
        }
      ])
    } 
    
    //Item is already in the cart
    else {
      const itemInCart = itemsInCart[itemIndex];
      itemInCart.amount += amount;
      setItemsInCart([...itemsInCart]);
    }
  }

  function updateItemCount(item, amount) {
    const itemIndex = itemsInCart.findIndex((itemInCart) => itemInCart.id === item.id);

    //itemIndex is -1: means the item is not in the cart
    if(itemIndex < 0) {
      setItemsInCart([
        ...itemsInCart,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          amount: amount
        }
      ])
    } 
    
    //Item is already in the cart
    else {
      const itemInCart = itemsInCart[itemIndex];
      itemInCart.amount = amount;
      setItemsInCart([...itemsInCart]);
    }
  }

  const context = {numberInCart, addItemsToCart, itemsInCart, updateItemCount}

  return (
    <>
      <Header numberInCart={numberInCart}/>
      <main>
        <Outlet context={context}/>
      </main>
    </>
  )
}

export default App
