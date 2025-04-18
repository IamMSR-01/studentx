import { useState } from 'react';

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
    // Add save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="https://via.placeholder.com/150" 
                  className="w-32 h-32 rounded-full mb-4"
                  alt="Owner Profile"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full">
                    ✎
                  </button>
                )}
              </div>
              <div className="inline-flex items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {ownerData.name}
                </h2>
                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  {ownerData.ownershipStake} Owner
                </span>
              </div>
              <p className="text-gray-600 mb-4">{ownerData.bio}</p>
              <div className="space-y-2">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Legal Documents
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Ownership Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Company</span>
                  <span className="font-medium">{ownerData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="font-medium">{ownerData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-medium">{ownerData.memberSince}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Business Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Monthly Revenue</h4>
                <p className="text-2xl font-bold text-gray-800">₹{businessMetrics.monthlyRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Valuation</h4>
                <p className="text-2xl font-bold text-green-600">{businessMetrics.valuation}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">YoY Growth</h4>
                <p className="text-2xl font-bold text-blue-500">{businessMetrics.yoyGrowth}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Total Customers</h4>
                <p className="text-2xl font-bold text-purple-600">{businessMetrics.totalCustomers.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Active Projects</h4>
                <p className="text-2xl font-bold text-amber-500">{businessMetrics.activeProjects}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Team Size</h4>
                <p className="text-2xl font-bold text-red-500">{businessMetrics.teamSize}</p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Owner Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  {isEditing ? (
                    <input
                      value={ownerData.name}
                      onChange={(e) => setOwnerData({...ownerData, name: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{ownerData.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email Address</label>
                  {isEditing ? (
                    <input
                      value={ownerData.email}
                      onChange={(e) => setOwnerData({...ownerData, email: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{ownerData.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Ownership Stake</label>
                  {isEditing ? (
                    <input
                      value={ownerData.ownershipStake}
                      onChange={(e) => setOwnerData({...ownerData, ownershipStake: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{ownerData.ownershipStake}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Location</label>
                  {isEditing ? (
                    <input
                      value={ownerData.location}
                      onChange={(e) => setOwnerData({...ownerData, location: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{ownerData.location}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Controls */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Business Controls</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button className="p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 flex items-center">
                  <span className="mr-2">📈</span> Financial Reports
                </button>
                <button className="p-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center">
                  <span className="mr-2">🤝</span> Investor Relations
                </button>
                <button className="p-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 flex items-center">
                  <span className="mr-2">📜</span> Legal Compliance
                </button>
                <button className="p-4 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 flex items-center">
                  <span className="mr-2">🚀</span> Growth Strategy
                </button>
                <button className="p-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center">
                  <span className="mr-2">🔄</span> Ownership Transfer
                </button>
                <button className="p-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 flex items-center">
                  <span className="mr-2">🌐</span> Global Expansion
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Business Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <span className="text-green-600">💰</span>
                    </div>
                    <div>
                      <p className="font-medium">Series B Funding Closed</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm">+ ₹450M</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <span className="text-blue-600">👥</span>
                    </div>
                    <div>
                      <p className="font-medium">New Leadership Hire</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                  </div>
                  <span className="text-blue-600 text-sm">CTO Position</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;