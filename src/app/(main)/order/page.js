'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function OrderPage() {
  const prices = {
    'Cappuccino': 3.99,
    'Latte': 4.49,
    'Espresso': 2.99,
    'Turkish Coffee': 4.99,
    'Americano': 3.49,
    'Iced Coffee': 4.25,
    'Mocha': 5.00,
    'Flat White': 4.00,
    'Chai': 3.00
  };

  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    coffeeType: '',
    quantity: 1,
    specialInstructions: ''
  });
  const [editingId, setEditingId] = useState(null);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setOrders(data);
  };

  useEffect(() => { fetchOrders(); }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.coffeeType) {
      alert('Please select coffee type');
      return;
    }

    const newItem = {
      id: editingId || Date.now(),
      coffeeType: formData.coffeeType,
      quantity: parseInt(formData.quantity),
      price: prices[formData.coffeeType],
      specialInstructions: formData.specialInstructions
    };

    if (editingId) {
      setCartItems(cartItems.map(item => item.id === editingId ? newItem : item));
    } else {
      setCartItems([...cartItems, newItem]);
    }

    resetForm();
  };

  const editItem = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      setFormData({
        coffeeType: item.coffeeType,
        quantity: item.quantity,
        specialInstructions: item.specialInstructions
      });
      setEditingId(id);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const resetForm = () => {
    setFormData({ coffeeType: '', quantity: 1, specialInstructions: '' });
    setEditingId(null);
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const { error } = await supabase
        .from('orders')
        .insert([{
          items: cartItems,
          total_price: calculateTotal(),
          status: 'pending'
        }]);

      if (error) throw error;

      alert('Order placed successfully!');
      setCartItems([]);
      fetchOrders();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const deleteOrder = async (id) => {
    if (confirm('Delete this order?')) {
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', id);

      if (!error) fetchOrders();
    }
  };

const updateOrder = async (id, updatedData) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update(updatedData)
      .eq('id', id);

    if (error) throw error;
    console.log('Order updated:', data);
    alert('Order updated successfully!');
    fetchOrders();
  } catch (error) {
    alert('Update Error: ' + error.message);
  }
};


  return (
    <div className="max-w-6xl mx-auto p-8 my-8">
      <br />
      <br />
      <h1 className="text-6xl font-bold text-center mb-8" style={{ fontFamily: "'CoffeeTown', serif" }}>Order Now</h1>
      <br />

      {/* Order Form */}
      <section className="mb-10">
        <h2 className="text-4xl font-semibold mb-4">Add Items</h2>
        <br />
        <div className="space-y-4 mb-4">
          <div>
            <label className="block mb-2">Coffee Type</label>
            <select
              value={formData.coffeeType}
              onChange={(e) => setFormData({ ...formData, coffeeType: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Coffee</option>
              {Object.keys(prices).map(coffee => (
                <option key={coffee} value={coffee}>{coffee}</option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label className="block mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <br />
          <div>
            <label className="block mb-2">Special Requests</label>
            <input
              type="text"
              value={formData.specialInstructions}
              onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <br />
        <button
          onClick={handleSubmit}
          className="shine-hover bg-gradient-to-r from-[#3b1f1f] via-[#7b3e2e] to-[#3b1f1f] text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-1"
        >
          {editingId ? 'Update Item' : 'Add to Cart'}
        </button>
      </section>
      <br />

      {/* Cart Summary */}
      <div className="mb-8">
        <br />
        <h2 className="text-2xl font-semibold mb-4">Your Order Summary</h2>
        <br />
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Qty</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Subtotal</th>
              <th className="p-2 text-left">Special Instructions</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.coffeeType}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">{item.price * item.quantity}</td>
                  <td className="p-2">{item.specialInstructions || '-'}</td>
                  <td className="p-2">
                    <button
                      onClick={() => editItem(item.id)}
                      className="shine-hover bg-yellow-600 text-white px-3 py-1 rounded-full mr-2 font-medium shadow-md transition-transform hover:-translate-y-[2px]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="shine-hover bg-red-600 text-white px-3 py-1 rounded-full font-medium shadow-md transition-transform hover:-translate-y-[2px]"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-bold">
              <td colSpan="3" className="p-2">Total</td>
              <td className="p-2">${calculateTotal()}</td>
              <td className="p-2"></td>
            </tr>
          </tfoot>
        </table>
        <br />
        <button
          onClick={placeOrder}
          className="shine-hover bg-gradient-to-r from-[#3b1f1f] via-[#7b3e2e] to-[#3b1f1f] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-1">
          Place Order
        </button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
