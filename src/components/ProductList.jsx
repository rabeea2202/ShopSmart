import React from "react";
import { useNavigate } from "react-router-dom";

// Import your images
import shirtImg from "../assets/shirt.png";
import jeansImg from "../assets/jeans.png";
import shoesImg from "../assets/shoes.png";
import NecklaceImg from "../assets/necklace.png";
import BagImg from "../assets/bag.png";

const products = [
  { id: 1, name: "Shirt", price: 2000, image: shirtImg },
  { id: 2, name: "Jeans", price: 4000, image: jeansImg },
  { id: 3, name: "Shoes", price: 6000, image: shoesImg },
  { id: 4, name: "Necklace", price: 300, image: NecklaceImg },
  { id: 5, name: "Hand Bag", price: 8000, image: BagImg },
];

function ProductList({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-gray-800 shadow-xl rounded-lg p-4 flex flex-col items-center bg-gray-50"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4"
            />
            {/* Product Details */}
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">PKR {product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-yellow-600 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Go to Cart Button */}
      <div className="text-center mt-8">
        <button
          onClick={goToCart}
          className="bg-gray-400 text-white font-semibold px-7 py-3 rounded-md hover:bg-gray-200"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductList;
