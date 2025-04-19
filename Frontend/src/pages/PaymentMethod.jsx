import { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentMethods = () => {
  const [method, setMethod] = useState('UPI');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-cyan-900 p-8 text-white">
      <div className="max-w-4xl mt-40 mx-auto bg-white/10 border-2 border-white/20 rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-cyan-500 mb-6">Payment</h1>

        {/* Tabs */}
        <div className="flex space-x-6 mb-6 border-b border-white/20">
          {['UPI', 'Card', 'Bank'].map((item) => (
            <button
              key={item}
              onClick={() => setMethod(item)}
              className={`py-2 px-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                method === item
                  ? 'text-cyan-400 border-cyan-500'
                  : 'text-gray-300 border-transparent hover:text-cyan-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* UPI Form */}
        {method === 'UPI' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <label className="block text-gray-300">Choose UPI App:</label>
            <select className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none">
              <option>Google Pay</option>
              <option>PhonePe</option>
              <option>Paytm</option>
              <option>BHIM</option>
            </select>

            <label className="block text-gray-300 mt-4">Enter UPI ID:</label>
            <input
              type="text"
              placeholder="yourname@upi"
              className="w-full bg-white/10 border border-white/20 text-black p-3 rounded-lg focus:outline-none"
            />

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black py-2 px-6 rounded-lg font-semibold">
              Pay Now
            </button>
          </motion.div>
        )}

        {/* Card Form */}
        {method === 'Card' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <label className="block text-gray-300">Card Number:</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none"
            />

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-300">Expiry Date:</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-300">CVV:</label>
                <input
                  type="password"
                  placeholder="***"
                  className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none"
                />
              </div>
            </div>

            <label className="block text-gray-300">Cardholder Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none"
            />

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black py-2 px-6 rounded-lg font-semibold">
              Pay Now
            </button>
          </motion.div>
        )}

        {/* Bank Form */}
        {method === 'Bank' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <label className="block text-gray-300">Select Bank:</label>
            <select className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
              <option>Axis Bank</option>
            </select>

            <label className="block text-gray-300 mt-4">Account Number:</label>
            <input
              type="text"
              placeholder="XXXXXXXXXXXX"
              className="w-full bg-white/10 border border-white/20 text-black p-3 rounded-lg focus:outline-none"
            />

            <label className="block text-gray-300">IFSC Code:</label>
            <input
              type="text"
              placeholder="SBIN0001234"
              className="w-full bg-white/10 border border-white/20 text-black p-3 rounded-lg focus:outline-none"
            />

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black py-2 px-6 rounded-lg font-semibold">
              Pay Now
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
