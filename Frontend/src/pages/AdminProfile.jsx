import { useState } from "react";
import Line from "../components/Line";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "Rajiv Malhotra",
    email: "rajiv.admin@studentx.com",
    bio: "Senior Administrator | Platform Operations Lead",
    location: "Bangalore, India",
    role: "Super Admin",
    department: "Platform Operations",
    skills: [
      "User Management",
      "Data Analysis",
      "System Security",
      "Content Moderation",
    ],
    memberSince: "January 2021",
    lastActive: "Today at 10:45 AM",
  });

  const [stats, setStats] = useState({
    totalUsers: 12458,
    activeUsers: 8976,
    pendingReports: 14,
    systemAlerts: 3,
  });

  const handleSave = () => setIsEditing(false);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 pt-40">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.pexels.com/photos/7755139/pexels-photo-7755139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-32 h-32 rounded-full mb-4 border-4 border-cyan-600"
                    alt="Admin"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                      ✎
                    </button>
                  )}
                </div>
                <h2 className="text-xl text-cyan-500 font-bold">{adminData.name}</h2>
                <span className="ml-2 mt-1 inline-block px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full">
                  {adminData.role}
                </span>
                <p className="text-gray-300 mt-2">{adminData.bio}</p>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                    className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg text-white"
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </button>
                  <button className="w-full py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
                    Security Settings
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3">
                  Admin Activity
                </h3>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Member Since</span>
                    <span className="font-medium text-white">
                      {adminData.memberSince}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Active</span>
                    <span className="font-medium text-white">
                      {adminData.lastActive}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Total Users",
                    value: stats.totalUsers,
                    color: "text-white",
                  },
                  {
                    label: "Active Users",
                    value: stats.activeUsers,
                    color: "text-green-400",
                  },
                  {
                    label: "Pending Reports",
                    value: stats.pendingReports,
                    color: "text-yellow-400",
                  },
                  {
                    label: "System Alerts",
                    value: stats.systemAlerts,
                    color: "text-red-500",
                  },
                ].map(({ label, value, color }, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md"
                  >
                    <h4 className="text-sm text-gray-300">{label}</h4>
                    <p className={`text-2xl font-bold ${color}`}>
                      {value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Personal Info */}
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Admin Information
                </h3>
                <div className="space-y-4 text-sm text-white">
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "Email Address", key: "email" },
                    { label: "Department", key: "department" },
                    { label: "Location", key: "location" },
                  ].map(({ label, key }) => (
                    <div key={key}>
                      <label className="block text-gray-300">{label}</label>
                      {isEditing ? (
                        <input
                          value={adminData[key]}
                          onChange={(e) =>
                            setAdminData({
                              ...adminData,
                              [key]: e.target.value,
                            })
                          }
                          className="w-full p-2 rounded-lg bg-gray-700 text-white border border-white/20 mt-1"
                        />
                      ) : (
                        <p className="mt-1">{adminData[key]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Capabilities */}
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Admin Capabilities
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["👥", "User Management", "bg-blue-700/30"],
                    ["📊", "Analytics Dashboard", "bg-green-700/30"],
                    ["🔐", "Permission Settings", "bg-purple-700/30"],
                    ["🔔", "System Notifications", "bg-yellow-700/30"],
                    ["🛡", "Content Moderation", "bg-red-700/30"],
                    ["⚙", "System Configuration", "bg-indigo-700/30"],
                  ].map(([icon, label, bg], idx) => (
                    <button
                      key={idx}
                      className={`p-4 ${bg} text-white rounded-lg flex items-center hover:bg-opacity-80`}
                    >
                      <span className="mr-2">{icon}</span> {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {adminData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="px-3 py-1 bg-gray-600/40 text-gray-200 rounded-full text-sm">
                      + Add Skill
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <Line />
      </div>
    </div>
  );
};

export default AdminProfile;
