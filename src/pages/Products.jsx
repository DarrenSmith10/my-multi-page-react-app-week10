// src/pages/Products.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';
import { products } from '../data';

function Products() {
  const { addToBasket, removeBasket } = useBasket();
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags from the products
  const uniqueTags = Array.from(new Set(products.flatMap(product => product.tags)));

  // Filter products based on selected tag
  const filteredProducts = selectedTag === 'All'
    ? products
    : products.filter(product => product.tags.includes(selectedTag));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      {/* Tag Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedTag('All')}
          className={`btn ${selectedTag === 'All' ? 'bg-blue-500 text-white' : 'btn-outline'}`}
        >
          All
        </button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`btn ${selectedTag === tag ? 'bg-blue-500 text-white' : 'btn-outline'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card p-4 shadow rounded bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {product.badge && (
                <span className="badge badge-info text-white text-xs px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
            </div>

            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="font-bold mb-2">£{product.price}</p>

            <div>
              <img className="product-image mb-3 rounded" src={product.image} alt={product.name} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link to={`/product/${product.id}`} className="btn-View btn-info">View</Link>
              <button onClick={() => addToBasket(product)} className="btn-Add btn-primary">Add</button>
              <button onClick={() => removeBasket(product)} className="btn-Remove btn-primary">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
