import React from 'react';
import Body from './component/Home';
import { CartProvider } from './component/context/CartProvider';

function App() {
  return (
    <CartProvider>
      <div>
        <Body />
      </div>
    </CartProvider>
  );
}

export default App;


