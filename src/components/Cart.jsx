import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const proceedToCheckout = () => {
    navigate("/checkout");
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
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-yellow-600 text-white font-semibold px-7 py-3 rounded-md hover:bg-yellow-400"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold text-right mt-6">
            Total: ${totalPrice}
          </h3>

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
      )}
    </div>
  );
}

export default Cart;
