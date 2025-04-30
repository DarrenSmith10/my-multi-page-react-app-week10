import React from 'react';
import { useBasket } from '../contexts/BasketContext';

function Basket() {
  const { basket, updateQuantity, calculateTotal } = useBasket();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

      {basket.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-xl">🛒 Your basket is empty.</p>
          <p className="mt-2">Go to the shop to add some stylish items!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {basket.map((item) => (
            <div key={item.id} className="basket-item p-4 bg-white rounded shadow flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">£{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor={`qty-${item.id}`} className="text-sm text-gray-600">Qty:</label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  min="1"
                  className="w-16 px-2 py-1 border rounded"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-6">
            Total: £{calculateTotal()}
          </div>
          <div className="text-right mt-4">
            <button
              className="btn bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
    
  );
}

export default Basket;
