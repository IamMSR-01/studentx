import { useState } from 'react';
import { motion } from 'framer-motion';

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    mentor: ''
  });

  const [sessionJoined, setSessionJoined] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = e => {
    e.preventDefault();
    setSessionJoined(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-cyan-900 p-8 text-white">
      <div className="max-w-6xl mt-40 mx-auto grid md:grid-cols-2 gap-10">
        {/* Booking Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Book a Mentorship Session</h2>
          <form onSubmit={handleBooking} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <select
              name="mentor"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 focus:outline-none"
              value={formData.mentor}
              onChange={handleChange}
              required
            >
              <option value="">Select Mentor</option>
              <option value="Ankit">Ankit - UI/UX Expert</option>
              <option value="Priya">Priya - Full Stack Dev</option>
              <option value="Rahul">Rahul - Data Scientist</option>
            </select>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 rounded-xl transition"
            >
              Book Session
            </button>
          </form>
        </motion.div>

        {/* Session Area */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Mentorship Session</h2>
          {!sessionJoined ? (
            <p className="text-gray-300">Book a session to join the call</p>
          ) : (
            <>
              <div className="w-full h-64 bg-black/40 border border-white/20 rounded-xl flex items-center justify-center text-gray-400 mb-4">
                <span>Live Video Session Window</span>
              </div>
              <button
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 rounded-xl"
              >
                Join Session
              </button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Mentorship;
