import { useState } from 'react';
import Line from '../components/Line';
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
   <div>
     <div className="min-h-screen mt-40">
      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 bg-blue-600/10 p-6 rounded-lg shadow-lg border-2 border-white/20">
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="https://images.pexels.com/photos/27271619/pexels-photo-27271619/free-photo-of-a-man-holding-a-soccer-jersey-with-the-number-7-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  className="w-32 h-32 rounded-full mb-4 border-2 border-cyan-500 bg-cover"
                  alt="Profile"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-cyan-500 text-cyan-500 p-2 rounded-full">
                    ✎
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold text-cyan-500 mb-2">
                {userData.name}
              </h2>
              <p className="text-gray-300 mb-4">{userData.bio}</p>
              <div className="space-y-2">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full py-2 bg-cyan-500 text-black text-lg font-medium rounded-lg hover:bg-cyan-600"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full py-2 border text-white border-gray-300 rounded-lg hover:bg-gray-50 hover:text-black text-lg font-medium">
                  View Public Profile
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-blue-500/10 p-6 rounded-lg shadow-sm border-2 border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-cyan-500">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300">Full Name</label>
                  {isEditing ? (
                    <input
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="w-full p-2 border rounded-lg mt-1 text-gray-400"
                    />
                  ) : (
                    <p className="mt-1 text-gray-300">{userData.name}</p>
                  )}
                </div>
                {/* Add similar editable fields for email, bio, location */}
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-blue-500/10 p-6 rounded-lg shadow-sm border-2 border-white/20">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1 bg-cyan-500 text-black rounded-xl text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subscription Plan */}
            <div className="bg-blue-500/10 p-6 rounded-lg shadow-sm border-2 border-white/20">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Your Plan</h3>
              <div className="flex items-center justify-between bg-cyan-500 p-4 rounded-lg">
                <div>
                  <h4 className="font-medium text-black">{userData.plan} Plan</h4>
                  <p className="text-sm text-gray-900">
                    {userData.plan === 'Pro' 
                      ? 'Full access to all premium features'
                      : 'Basic access with limited features'}
                  </p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700">
                  {userData.plan === 'Pro' ? 'Manage Plan' : 'Upgrade to Pro'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mb-10'>
      <Line />
    </div>
   </div>
  );
};

export default UserProfile;