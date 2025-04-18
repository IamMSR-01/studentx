import React from 'react';

export default function GetStart() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Ready to accelerate your career?</h2>
          <p className="text-gray-600">
            Join thousands of students using StudentX to build skills, find opportunities, and 
            launch their careers.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Sign Up Free Today
          </button>
          <button className="text-gray-700 hover:text-gray-900 font-medium py-2 px-6 transition-colors">
            See Demo
          </button>
        </div>
      </div>
    </div>
  );
}