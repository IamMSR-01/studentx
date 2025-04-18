import React from 'react';
import { Link } from 'react-router-dom';
import Line from './Line';

export default function GetStart() {
  return (
   <div>
     <div className="flex items-center justify-center mt-20 mb-10 p-8 ">
      <div className="rounded-lg p-10 max-w-5xl w-full bg-white/10 border-2 border-white/20 shadow-lg hover:shadow-cyan-600 transition-shadow duration-300">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-cyan-500 mb-3">Ready to <span className='text-yellow-500'>accelerate</span> your career?</h2>
          <p className="text-gray-300 mt-6 font-serif">
            Join thousands of students using StudentX to build skills, find opportunities, and 
            launch their careers.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link className="bg-green-600 hover:bg-green-400 text-white font-medium py-2 px-6 rounded-xl transition-colors">
            Sign Up Free Today
          </Link>
          <Link className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-xl transition-colors">
            See Demo
          </Link>
        </div>
      </div>
    </div>
    <div className='mt-20 mb-10'>
      <Line />
    </div>
   </div>
  );
}