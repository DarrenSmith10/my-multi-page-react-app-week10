// src/pages/Products.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';
import { products } from '../data';

function Products() {
  const { addToBasket, removeBasket } = useBasket();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p className='text-gray-500 mb-2'>{product.description}</p>
            <p>Price: £{product.price}</p>
            <div>
              <img className='product-image' src={product.image} alt={product.name} />
            </div>
            <Link to={`/product/${product.id}`} className="btn btn-info">View Product</Link>
            <button onClick={() => addToBasket(product)} className="btn btn-primary ml-2">Add to Basket</button>
            <button onClick={() => removeBasket(product)} className="btn btn-primary ml-2">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
