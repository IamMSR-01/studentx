import { useState } from 'react';
import { motion } from 'framer-motion';

const CareerGuidance = () => {
  const [selectedCareer, setSelectedCareer] = useState('UI/UX Designer');
  const [activeTab, setActiveTab] = useState('Career Roadmap');
  
  const careerPaths = [
    {
      title: 'UI/UX Designer',
      description: 'Create user-centered designs for apps and websites',
      match: 92,
      roadmap: [
        { step: 'Learn Design Fundamentals', completed: true },
        { step: 'Master Figma & Prototyping', completed: true },
        { step: 'Create Portfolio Projects', completed: false },
        { step: 'Internship or Junior Role', completed: false },
        { step: 'Specialize in Product Design', completed: false }
      ]
    },
    {
      title: 'Full Stack Developer',
      description: 'Build both frontend and backend of web applications',
      match: 85,
      roadmap: [
        { step: 'Learn HTML, CSS & JavaScript', completed: true },
        { step: 'Master Frontend Frameworks', completed: false },
        { step: 'Learn Backend Technologies', completed: false },
        { step: 'Build Full Stack Projects', completed: false },
        { step: 'Deploy Applications & DevOps', completed: false }
      ]
    },
    {
      title: 'Data Analyst',
      description: 'Extract insights from data to inform business decisions',
      match: 78,
      roadmap: [
        { step: 'Learn SQL & Data Manipulation', completed: true },
        { step: 'Master Data Visualization', completed: false },
        { step: 'Statistical Analysis', completed: false },
        { step: 'Data Mining Techniques', completed: false },
        { step: 'Business Intelligence Tools', completed: false }
      ]
    }
  ];

  const currentCareer = careerPaths.find(career => career.title === selectedCareer);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-cyan-900 p-8">
      <div className="max-w-7xl mt-30 pb-20 mx-auto">
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-cyan-500">Career Guidance</h1>
            <p className="text-gray-300">Discover and plan your ideal career path</p>
          </div>
          <button className="flex items-center bg-cyan-500 px-6 rounded-xl text-black hover:bg-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Report
          </button>
        </div>
        
        <div className="flex space-x-8 mt-8">
          {/* Left Side: Career Path Selector */}
          <motion.div
            className="w-1/3 bg-white/10 border-2 border-white/20 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-cyan-500 mb-4">Career Path Selector</h2>
            
            {careerPaths.map(career => (
              <motion.div 
                key={career.title}
                className={`mb-4 p-4 rounded-lg cursor-pointer ${selectedCareer === career.title ? 'bg-cyan-500/50' : ''}`}
                onClick={() => setSelectedCareer(career.title)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-gray-300">{career.title}</h3>
                  <div className="text-right">
                    <span className="block font-bold text-gray-400">{career.match}%</span>
                    <span className="text-sm text-gray-400">Match</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{career.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Side: Selected Career Details */}
          <motion.div
            className="w-2/3 bg-white/10 border-2 border-white/20 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-cyan-500">{currentCareer.title}</h2>
              <div className="px-3 py-1 bg-cyan-500 rounded-full text-sm">
                Match: <span className="font-bold">{currentCareer.match}%</span>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b mb-6">
              {['Career Roadmap', 'Skills Required', 'Learning Resources'].map(tab => (
                <motion.button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === tab 
                    ? 'text-gray-400 border-b-2 border-blue-500' 
                    : 'text-gray-300 hover:text-gray-400'}`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
            
            {/* Career Description */}
            <p className="text-gray-200 mb-6">{currentCareer.description}</p>
            
            {/* Roadmap */}
            {activeTab === 'Career Roadmap' && (
              <div className="space-y-4 text-white">
                {currentCareer.roadmap.map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center mb-1 ${step.completed ? 'text-gray-200' : 'text-gray-200'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        step.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-300'
                      }`}>
                        {step.completed ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span className={`font-medium ${step.completed ? 'text-gray-200' : 'text-gray-400'}`}>
                        {step.step}
                      </span>
                    </div>
                    {index < currentCareer.roadmap.length - 1 && (
                      <div className="ml-3 pl-3 border-l h-8 border-gray-200"></div>
                    )}
                    {/* Progress bar */}
                    {step.completed && (
                      <div className="h-1 bg-green-500 w-full rounded-full mt-1 mb-4"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Skills Required Tab Content */}
            {activeTab === 'Skills Required' && (
              <div className="space-y-4">
                <p className="text-gray-200">Content for Skills Required would go here.</p>
              </div>
            )}
            
            {/* Learning Resources Tab Content */}
            {activeTab === 'Learning Resources' && (
              <div className="space-y-4">
                <p className="text-gray-200">Content for Learning Resources would go here.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
