import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')  // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="border border-gray-600 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="mt-1 text-yellow-500">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
