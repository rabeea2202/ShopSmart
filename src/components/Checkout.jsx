import React, { useState } from "react";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all fields!");
      return;
    }

    // Validate phone number (must be exactly 11 digits)
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: "Phone number must be exactly 11 digits." });
      return;
    }

    setErrors({ ...errors, phone: "" });  // Clear any previous errors
    alert("Order placed successfully!");
  };

  // Calculate the total price considering the quantity of each item
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const shippingFee = 100; 

  // Calculate the total cost including shipping fee
  const totalCost = totalPrice + shippingFee;

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
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-6 text-yellow-600">Subtotal: PKR {totalPrice.toFixed(2)}</h3>
        <h3 className="text-xl font-semibold mb-6 text-yellow-600">Shipping Fee: PKR {shippingFee.toFixed(2)}</h3>
        <h3 className="text-xl font-semibold mb-6 text-yellow-600">Total: PKR {totalCost.toFixed(2)}</h3>
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
