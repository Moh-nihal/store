import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center border p-4 mb-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>${item.price}</p>
              <div className="mt-2">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="border p-1 w-16 text-center text-black"
                  min="1"
                />
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
