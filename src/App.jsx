import { Outlet } from 'react-router';
import Header from './layout/Header'
import { useState } from 'react';

function App() {
  const [numberInCart, setNumberInCart] = useState(0);
  const [itemsInCart, setItemsInCart] = useState({});

  function addToNumberInCart(amount) {
    setNumberInCart(numberInCart + amount);
  }

  function addItemsToCart(item, amount) {
    let newItemRecord;

    //New item being added to the cart.
    if(!itemsInCart[item.id]) {
      newItemRecord = {
        amount: amount,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl
      };
    } 

    //More of the same item in the cart being added
    else {
      const prevAmount = itemsInCart[item.id].amount;
      newItemRecord = {
        ...itemsInCart[item.id],
        amount: prevAmount + amount
      }
    }

    setItemsInCart({
      ...itemsInCart,
      [item.id]: newItemRecord
    })
  }

  const context = {numberInCart, addToNumberInCart, addItemsToCart, itemsInCart}
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
