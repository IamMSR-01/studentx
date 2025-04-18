import React from 'react';

const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            One platform to build your skills, find opportunities, and accelerate your career journey.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Career Guidance */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">AI Career Guidance</h3>
            <p className="text-gray-600">
              Get personalized career path recommendations and roadmaps based on your skills and interests.
            </p>
          </div>
          
          {/* Resume & LinkedIn Optimizer */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Resume & LinkedIn Optimizer</h3>
            <p className="text-gray-600">
              Build ATS-friendly resumes and optimize your LinkedIn profile with AI suggestions.
            </p>
          </div>
          
          {/* Job & Internship Matching */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Job & Internship Matching</h3>
            <p className="text-gray-600">
              Discover opportunities perfectly aligned with your skills and career goals.
            </p>
          </div>
          
          {/* Skill Assessment */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Skill Assessment</h3>
            <p className="text-gray-600">
              Test your abilities with AI-generated assessments and earn shareable certificates.
            </p>
          </div>
          
          {/* Accommodation Finder */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Accommodation Finder</h3>
            <p className="text-gray-600">
              Find student housing and compatible roommates near your campus or workplace.
            </p>
          </div>
          
          {/* AI Chatbot Assistant */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">AI Chatbot Assistant</h3>
            <p className="text-gray-600">
              Get 24/7 help with career questions, resume tips, and more from your personal AI assistant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable version with props
const FeatureCardsReusable = () => {
  const features = [
    {
      title: "AI Career Guidance",
      description: "Get personalized career path recommendations and roadmaps based on your skills and interests."
    },
    {
      title: "Resume & LinkedIn Optimizer",
      description: "Build ATS-friendly resumes and optimize your LinkedIn profile with AI suggestions."
    },
    {
      title: "Job & Internship Matching",
      description: "Discover opportunities perfectly aligned with your skills and career goals."
    },
    {
      title: "Skill Assessment",
      description: "Test your abilities with AI-generated assessments and earn shareable certificates."
    },
    {
      title: "Accommodation Finder",
      description: "Find student housing and compatible roommates near your campus or workplace."
    },
    {
      title: "AI Chatbot Assistant",
      description: "Get 24/7 help with career questions, resume tips, and more from your personal AI assistant."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            One platform to build your skills, find opportunities, and accelerate your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;