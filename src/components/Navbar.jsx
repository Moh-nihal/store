// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Gents Freak</Link>
        <div>
          <Link to="/cart" className="mr-4">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
