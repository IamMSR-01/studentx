import React from 'react';

export default function Working() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-16 px-8">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">How StudentX Works</h1>
        <p className="text-lg text-gray-600">Four simple steps to transform your career journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Create Profile</h2>
          <p className="text-center text-gray-600">
            Complete your profile with skills, interests, and career goals
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Get Guidance</h2>
          <p className="text-center text-gray-600">
            Receive AI-powered career roadmaps and personalized suggestions
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Build Skills</h2>
          <p className="text-center text-gray-600">
            Take assessments and access learning resources to upskill
          </p>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Land Opportunities</h2>
          <p className="text-center text-gray-600">
            Apply to matched jobs with your optimized resume and profile
          </p>
        </div>
      </div>
    </div>
  );
}