import React from 'react';
import './index.css'

const ProductsList = ({ category = "" }) => {
  
  const products = [
    { id: 1, name: 'Vivo',Price:17000, category: 'Mobiles' },
    { id: 4, name: 'MacBook',Price:110000, category: 'Laptops' },
    { id: 2, name: 'Iphone',Price:95000, category: 'Mobiles'},
    { id: 3, name: 'Asus',Price:68000, category: 'Laptops',},
    { id: 5, name: 'Popcorn Shirt',Price:1500, category: 'Clothing',},
    { id: 6, name: 'Cargo Phant',Price:1000, category: 'Clothing',},
  ];

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <table className="center" style={{ width: '50%', borderCollapse: 'collapse' ,textAlign:'center'}}>
      <thead>
        <tr>
          <th align='center'>Name</th>
          <th align='center'>Price</th>
          <th align='center'>Category</th>
          
          
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product, index) => (
          <tr key={product.id} style={{ backgroundColor: index % 2 === 0 ? '#d5f4e6' : '#f18973' }}>
            <td>{product.name}</td>
            <td>{product.Price}</td>
            <td>{product.category}</td>
            
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;