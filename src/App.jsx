import { Outlet } from 'react-router';
import Header from './layout/Header'
import { useState } from 'react';

function App() {
  const [numberInCart, setNumberInCart] = useState(0);

  function addToNumberInCart(amount) {
    setNumberInCart(numberInCart + amount);
  } 

  const context = {addToNumberInCart}
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
