import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductListingPage.css';

const products = [
  { id: 1, name: 'Snake Plant', price: 25, category: 'Air Purifying', image: 'snake-plant.jpg' },
  // سایر محصولات را اینجا اضافه کنید
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cart.some((item) => item.id === product.id)}
            >
              {cart.some((item) => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;