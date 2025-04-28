import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1; // Default to 1 if no quantity is set
      return acc;
    }, {})
  );

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    setQuantities({ ...quantities, [id]: newQuantity });
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  const shippingFees = 100; 
  const grandTotal = totalPrice + shippingFees;

  const proceedToCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice: grandTotal } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">PKR {item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, quantities[item.id] - 1)
                      }
                      className="bg-gray-300 text-black font-semibold px-3 py-1 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-lg">{quantities[item.id]}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, quantities[item.id] + 1)
                      }
                      className="bg-gray-300 text-black font-semibold px-3 py-1 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-yellow-600 text-white font-semibold px-7 py-3 rounded-md hover:bg-yellow-400"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="space-y-4 mt-6">
            <h3 className="text-xl font-bold">Cart Summary</h3>
            <div className="flex justify-between">
              <span className="text-lg">Subtotal:</span>
              <span className="text-lg">PKR {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Shipping:</span>
              <span className="text-lg">PKR {shippingFees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span>Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="text-right mt-4">
              <button
                onClick={proceedToCheckout}
                className="bg-gray-400 text-white font-semibold px-7 py-3 rounded-md hover:bg-gray-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
