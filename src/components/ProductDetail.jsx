import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)  // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <div className="mt-4">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-1 w-16 text-center text-black"
              min="1"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-500 text-white px-4 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
