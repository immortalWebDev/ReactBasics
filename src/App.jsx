import React from 'react';
import Store from './component/Pages/Store';
import { CartProvider } from './component/context/CartProvider';

function App() {
  return (
    <CartProvider>
      <div>
        <Store></Store>
      </div>
    </CartProvider>
  );
}

export default App;


