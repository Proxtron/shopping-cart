import { Outlet } from 'react-router';
import Header from './layout/Header'
import { useState } from 'react';

function App() {
  const [numberInCart, setNumberInCart] = useState(0);

  return (
    <>
      <Header numberInCart={numberInCart}/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
