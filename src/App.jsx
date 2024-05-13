import React from 'react';
import { CartProvider } from './component/context/CartProvider';
import Home from './component/Pages/Home';

function App() {
  return (
    <CartProvider>
      <div>
        <Home></Home>
      </div>
    </CartProvider>
  );
}

export default App;


