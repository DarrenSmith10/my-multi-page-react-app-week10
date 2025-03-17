import { products } from '../data';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';


function Home() {

    // TODO: what does this function do?
  const { addToBasket } = useBasket();
  const { removeBasket } = useBasket();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: £{product.price}</p>
              <div>
                  <img src={product.image} alt={product.name} />
              </div>
            <Link to={`/product/${product.id}`} class="btn btn-active btn-info">View Product</Link>
            <button onClick={() => addToBasket(product)} class = "btn btn-primary"> Add to Basket</button>
            <button onClick={() => removeBasket(product)} class = "btn btn-primary">Remove from Basket</button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
