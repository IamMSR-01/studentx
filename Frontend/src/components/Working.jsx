import React from 'react';
import Line from './Line';

export default function Working() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mt-10 py-16 px-8">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-2">How <span className='text-cyan-500'>StudentX</span> Works</h1>
        <p className="text-lg mt-4 text-gray-300">Four simple steps to transform your career journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {/* Step 1 */}
        <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-cyan-500 mb-3">Create Profile</h2>
          <p className="text-center text-gray-300">
            Complete your profile with skills, interests, and career goals
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-cyan-500 mb-3">Get Guidance</h2>
          <p className="text-center text-gray-300">
            Receive AI-powered career roadmaps and personalized suggestions
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-cyan-500 mb-3">Build Skills</h2>
          <p className="text-center text-gray-300">
            Take assessments and access learning resources to upskill
          </p>
        </div>
        
        {/* Step 4 */}
        <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-cyan-500 mb-3">Land Opportunities</h2>
          <p className="text-center text-gray-300">
            Apply to matched jobs with your optimized resume and profile
          </p>
        </div>
      </div>
    </div>
    <div className='mt-20'>
      <Line />
    </div>
    </div>
  );
}