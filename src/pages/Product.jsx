import React from 'react';
import { useParams } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';

import { products } from '../data';
// const productImages = {
//   1: require('../assets/images/orange.jpg'),
//   2: require('../assets/images/apple.jpg'),
//   3: require('../assets/images/banana.jpg'),
//   4: require('../assets/images/lemon.jpg'),
//   5: require('../assets/images/pineapple.jpg'),
//   6: require('../assets/images/grapes.jpg'),
//   // Add more product images as needed
// };

function Product() {
    // TODO: what does this function do?
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToBasket, removeFromBasket } = useBasket();
  
  if (!product) return <p>Product not found</p>;

  // const image = productImages[product.id];

  return (
    <div className='product-card'>
      <h2>{product.name}</h2>
      {product.badge && (
  <div className="badge badge-success text-white mb-2">{product.badge}</div>
)}

<p className="text-gray-600 mb-2">{product.longDescription}</p>
      
        <div>
                  <img src={product.image} alt={product.name} />
        </div>
      <p>Price: £{product.price}</p>
      <button onClick={() => addToBasket(product)} class = "btn btn-primary">Add to Basket</button>
      <button onClick={() => removeFromBasket(product)} class = "btn btn-primary">Remove from Basket</button>

      {product.tags.map(tag => (
    <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
      #{tag}
    </span>
  ))}
    </div>
  );
}

export default Product;
