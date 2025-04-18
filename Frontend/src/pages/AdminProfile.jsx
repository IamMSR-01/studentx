import { useState } from 'react';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    name: 'Rajiv Malhotra',
    email: 'rajiv.admin@studentx.com',
    bio: 'Senior Administrator | Platform Operations Lead',
    location: 'Bangalore, India',
    role: 'Super Admin',
    department: 'Platform Operations',
    skills: ['User Management', 'Data Analysis', 'System Security', 'Content Moderation'],
    memberSince: 'January 2021',
    lastActive: 'Today at 10:45 AM'
  });

  const [stats, setStats] = useState({
    totalUsers: 12458,
    activeUsers: 8976,
    pendingReports: 14,
    systemAlerts: 3
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
                  src="/api/placeholder/150/150" 
                  className="w-32 h-32 rounded-full mb-4"
                  alt="Admin Profile"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                    ✎
                  </button>
                )}
              </div>
              <div className="inline-flex items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {adminData.name}
                </h2>
                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  {adminData.role}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{adminData.bio}</p>
              <div className="space-y-2">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Security Settings
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Admin Activity</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-medium">{adminData.memberSince}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Active</span>
                  <span className="font-medium">{adminData.lastActive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Admin Dashboard Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Total Users</h4>
                <p className="text-2xl font-bold text-gray-800">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Active Users</h4>
                <p className="text-2xl font-bold text-blue-600">{stats.activeUsers.toLocaleString()}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">Pending Reports</h4>
                <p className="text-2xl font-bold text-orange-500">{stats.pendingReports}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-500">System Alerts</h4>
                <p className="text-2xl font-bold text-red-500">{stats.systemAlerts}</p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Admin Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  {isEditing ? (
                    <input
                      value={adminData.name}
                      onChange={(e) => setAdminData({...adminData, name: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{adminData.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email Address</label>
                  {isEditing ? (
                    <input
                      value={adminData.email}
                      onChange={(e) => setAdminData({...adminData, email: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{adminData.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Department</label>
                  {isEditing ? (
                    <input
                      value={adminData.department}
                      onChange={(e) => setAdminData({...adminData, department: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{adminData.department}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-gray-600">Location</label>
                  {isEditing ? (
                    <input
                      value={adminData.location}
                      onChange={(e) => setAdminData({...adminData, location: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{adminData.location}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Admin Capabilities */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Admin Capabilities</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center">
                  <span className="mr-2">👥</span> User Management
                </button>
                <button className="p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 flex items-center">
                  <span className="mr-2">📊</span> Analytics Dashboard
                </button>
                <button className="p-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 flex items-center">
                  <span className="mr-2">🔐</span> Permission Settings
                </button>
                <button className="p-4 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 flex items-center">
                  <span className="mr-2">🔔</span> System Notifications
                </button>
                <button className="p-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center">
                  <span className="mr-2">🛡</span> Content Moderation
                </button>
                <button className="p-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 flex items-center">
                  <span className="mr-2">⚙</span> System Configuration
                </button>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {adminData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    + Add Skill
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;