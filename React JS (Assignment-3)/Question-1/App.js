import React from 'react';
import ProductList from './productlist';

function App() {
  return (
    <div  align='center' className='img'><h1>Product Catalog</h1>
      
      <h2 align='center'>Mobiles</h2> <ProductList category="Mobiles" />

      <h2  align='center'>Laptops</h2><ProductList category="Laptops" />

      <h2  align='center'>Clothing</h2><ProductList category="Clothing" />

      <h2  align='center'>All Products</h2><ProductList />

     
    </div>
  );
}

export default App;