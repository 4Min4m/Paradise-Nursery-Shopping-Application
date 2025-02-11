import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Delete</button>
        </div>
      ))}
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
};

export default ShoppingCartPage;