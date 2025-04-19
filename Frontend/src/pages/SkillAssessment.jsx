import React from "react";

const SkillAssessment = () => {
  const skills = [
    { name: "JavaScript", level: "Intermediate", progress: 65 },
    { name: "React", level: "Beginner", progress: 40 },
    { name: "UX Design", level: "Advanced", progress: 85 },
    { name: "SQL", level: "Beginner", progress: 30 },
    { name: "Digital Marketing", level: "Intermediate", progress: 60 },
    { name: "Python", level: "Beginner", progress: 25 },
  ];

  const certificates = [
    { name: "JavaScript Fundamentals", score: 85, date: "October 12, 2023" },
    { name: "UX Design Principles", score: 92, date: "August 5, 2023" },
  ];

  return (
    <div className="pt-30 bg-gradient-to-br from-black to-cyan-900">
      <div className="min-h-screen p-4 sm:p-8 md:p-12 font-sans">
      <h1 className="text-3xl font-bold text-cyan-500 mb-2">Skill Assessment & Certification</h1>
      <p className="text-gray-300 mb-6">Test your abilities and earn certificates to showcase your skills</p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Skills Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-gray-100">Select a Skill to Assess</h2>

          <div className="flex flex-wrap gap-2">
            {['All Skills', 'Programming', 'Design', 'Data', 'Marketing'].map(cat => (
              <button
                key={cat}
                className="px-4 py-1 bg-cyan-500 rounded-full text-sm hover:bg-cyan-600"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/10 rounded-xl shadow p-4 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-100">{skill.name}</div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      skill.level === 'Advanced'
                        ? 'bg-purple-100 text-purple-700'
                        : skill.level === 'Intermediate'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <div className="text-sm text-gray-300 mt-2">Progress</div>
                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div
                    className="h-2 rounded bg-cyan-500"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-right text-gray-600 mt-1">{skill.progress}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Skill & Certificates */}
        <div className="space-y-6">
          <div className="bg-white/10 rounded-xl p-6 shadow text-center min-h-[150px]">
            <h3 className="text-lg font-semibold text-gray-200">Selected Skill</h3>
            <p className="text-gray-400 mt-2">No Skill Selected</p>
            <p className="text-sm text-gray-300">Select a skill from the list to get started</p>
          </div>

          <div className="bg-white/10 rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">Your Certificates</h3>
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 mb-3 flex items-center justify-between"
              >
                <div>
                  <div className="font-medium text-gray-200">{cert.name}</div>
                  <div className="text-sm text-gray-400">Score: {cert.score}%</div>
                  <div className="text-xs text-gray-300">Issued: {cert.date}</div>
                </div>
                <button className="text-cyan-600 hover:text-cyan-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillAssessment;
