import React from 'react';
import './styles/Cart.css';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <span>{cartItem.product.name}</span>
            <span>Количество: {cartItem.quantity}</span>
            <span>Стоимость: {cartItem.product.price * cartItem.quantity}тг.</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Итого: {calculateTotal()}тг.</strong>
      </div>
    </div>
  );
};

export default Cart;
