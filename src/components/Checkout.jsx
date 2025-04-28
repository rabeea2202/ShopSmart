import React, { useState } from "react";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all fields!");
      return;
    }
    alert("Order placed successfully!");
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Checkout</h2>
      <div className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-6 text-yellow-600">Total: ${totalPrice}</h3>
        <button
          onClick={handlePlaceOrder}
          className="bg-gray-400 text-white font-semibold px-7 py-3 rounded-md hover:bg-gray-200"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
