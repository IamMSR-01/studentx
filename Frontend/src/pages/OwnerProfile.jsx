import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OwnerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [ownerData, setOwnerData] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@businessx.com',
    bio: 'Founder & CEO | Tech Entrepreneur',
    location: 'Mumbai, India',
    ownershipStake: '85%',
    company: 'BusinessX Technologies',
    industry: 'SaaS & Cloud Solutions',
    skills: ['Strategic Planning', 'Investor Relations', 'Product Development', 'Financial Modeling'],
    memberSince: 'June 2018',
    lastActive: 'Today at 9:30 AM'
  });

  const [businessMetrics, setBusinessMetrics] = useState({
    monthlyRevenue: 2450000,
    totalCustomers: 15400,
    yoyGrowth: '38.5%',
    activeProjects: 9,
    teamSize: 145,
    valuation: '₹2.3B'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black to-cyan-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto pt-40 px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="md:col-span-1 bg-white/10 border-2 border-white/20 p-6 rounded-2xl shadow-xl" variants={fadeIn}>
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.pexels.com/photos/7755139/pexels-photo-7755139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-32 h-32 rounded-full mb-4 border-4 border-blue-200"
                  alt="Owner Profile"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full">
                    ✎
                  </button>
                )}
              </div>
              <h2 className="text-2xl font-bold text-cyan-500">
                {ownerData.name}
                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  {ownerData.ownershipStake} Owner
                </span>
              </h2>
              <p className="text-gray-400 mb-4 mt-2">{ownerData.bio}</p>
              <div className="space-y-2">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full py-2 bg-cyan-500 text-black font-medium text-lg rounded-lg hover:bg-cyan-700 transition"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full py-2 border border-gray-300 text-white rounded-lg hover:bg-gray-100 hover:text-black font-medium text-lg">
                  Legal Documents
                </button>
              </div>
              <div className="mt-6 pt-6 border-t text-left">
                <h3 className="text-sm font-semibold text-cyan-500 mb-3">Ownership Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Company</span>
                    <span className="font-medium">{ownerData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Industry</span>
                    <span className="font-medium">{ownerData.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Member Since</span>
                    <span className="font-medium">{ownerData.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="md:col-span-2 space-y-6" variants={fadeIn}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(businessMetrics).map(([key, value], i) => (
                <motion.div
                  key={key}
                  className="bg-white/10 p-4 rounded-2xl shadow-md"
                  variants={fadeIn}
                >
                  <h4 className="text-sm font-medium text-cyan-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                  <p className="text-2xl font-bold text-gray-100">
                    {typeof value === 'number' ? `₹${value.toLocaleString()}` : value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div className="bg-white/10 p-6 rounded-2xl shadow-md border-2 border-white/20" variants={fadeIn}>
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Owner Information</h3>
              <div className="space-y-4">
                {['name', 'email', 'ownershipStake', 'location'].map((field) => (
                  <div key={field}>
                    <label className="text-sm text-cyan-500 capitalize">{field}</label>
                    {isEditing ? (
                      <input
                        value={ownerData[field]}
                        onChange={(e) => setOwnerData({ ...ownerData, [field]: e.target.value })}
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-gray-100">{ownerData[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OwnerProfile;
