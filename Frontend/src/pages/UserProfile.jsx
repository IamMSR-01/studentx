import { useState } from 'react';
// import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Priya Sharma',
    email: 'priya@studentx.com',
    bio: 'Computer Science Student | Aspiring UX Designer',
    location: 'Mumbai, India',
    skills: ['UI/UX Design', 'Python', 'React', 'Figma'],
    plan: 'Pro'
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
                  alt="Profile"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                    ✎
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {userData.name}
              </h2>
              <p className="text-gray-600 mb-4">{userData.bio}</p>
              <div className="space-y-2">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  View Public Profile
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  {isEditing ? (
                    <input
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  ) : (
                    <p className="mt-1">{userData.name}</p>
                  )}
                </div>
                {/* Add similar editable fields for email, bio, location */}
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subscription Plan */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Your Plan</h3>
              <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                <div>
                  <h4 className="font-medium text-blue-600">{userData.plan} Plan</h4>
                  <p className="text-sm text-gray-600">
                    {userData.plan === 'Pro' 
                      ? 'Full access to all premium features'
                      : 'Basic access with limited features'}
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {userData.plan === 'Pro' ? 'Manage Plan' : 'Upgrade to Pro'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;