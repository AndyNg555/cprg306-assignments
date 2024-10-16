"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ quantity });
  };

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-xl font-bold mb-4">New Item</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
        
            {/* {quantity > 20 && <p>You cant go higher than 20</p>}
            {quantity < 1 && <p>You cant go lower than 1</p>} */}
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-red-500 text-white rounded-md mr-4 hover:bg-red-600"
            >
            -
          </button>

          <span className="text-xl pr-4">{quantity}</span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-red-600">
            +
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <div>
        {quantity === 1 && <p>counter cannot be lower than 1</p>}
        {quantity === 20 ? <p>counter cannot be higher than 20</p> : null}
        </div>
      </form>
    </div>
  );
}
"use client";

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const item = { name, quantity, category };
    console.log(item);
    
    alert(`Item: ${name} Quantity: ${quantity} Category: ${category}`);
    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-xl font-bold mb-4">New Item</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter item name"
          />
        </div>

        <div className="flex items-center mb-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-red-500 text-white rounded-md mr-4 hover:bg-red-600"
          >
            -
          </button>
          <span className="text-xl pr-4">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            +
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        <div>
          {quantity === 1 && <p>Counter cannot be lower than 1</p>}
          {quantity === 20 && <p>Counter cannot be higher than 20</p>}
        </div>
      </form>
    </div>
  );
}
