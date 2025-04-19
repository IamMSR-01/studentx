import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Video, Award, Code, Calendar, Heart, Bookmark, Star } from 'lucide-react';
import Line from '../components/Line';

// Sample data structure for resources
const resourcesData = [
  {
    id: "course1",
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack developer",
    type: "course",
    platform: "Udemy",
    platformLogo: "/api/placeholder/120/60",
    url: "https://example.com/course",
    price: 499,
    currency: "INR",
    difficulty: "Beginner",
    format: ["Video", "Interactive"],
    language: ["English", "Hindi"],
    timeCommitment: {
      hours: 40,
      timeframe: "Total"
    },
    ratings: {
      average: 4.8,
      count: 1240
    },
    careers: ["full-stack", "frontend"],
    skills: ["html", "css", "javascript", "react", "node"],
    tags: ["coding", "web development"],
    isFeatured: true,
    completionBadgeImage: "/api/placeholder/60/60",
    successStories: [
      {
        studentName: "Priya Sharma",
        quote: "This course helped me land a job at a top startup!",
        outcome: "Junior Developer at TechStart",
        imageUrl: "/api/placeholder/50/50"
      }
    ],
    regionSpecific: false
  },
  {
    id: "cert1",
    title: "AWS Certified Solutions Architect",
    description: "Industry-recognized certification for cloud architecture",
    type: "certification",
    platform: "AWS",
    platformLogo: "/api/placeholder/120/60",
    url: "https://example.com/cert",
    price: 12000,
    currency: "INR",
    difficulty: "Advanced",
    format: ["Text", "Interactive"],
    language: ["English"],
    timeCommitment: {
      hours: 120,
      timeframe: "Total"
    },
    ratings: {
      average: 4.6,
      count: 890
    },
    careers: ["devops", "cloud-engineer"],
    skills: ["aws", "cloud-computing", "networking"],
    tags: ["cloud", "certification"],
    isFeatured: true,
    completionBadgeImage: "/api/placeholder/60/60",
    successStories: [
      {
        studentName: "Rahul Patel",
        quote: "This certification doubled my market value",
        outcome: "Solutions Architect at CloudFirst",
        imageUrl: "/api/placeholder/50/50"
      }
    ],
    regionSpecific: false
  },
  {
    id: "tutorial1",
    title: "Machine Learning with Python",
    description: "Learn machine learning concepts and implementation with Python",
    type: "tutorial",
    platform: "NPTEL",
    platformLogo: "/api/placeholder/120/60",
    url: "https://example.com/tutorial",
    price: "Free",
    currency: "INR",
    difficulty: "Intermediate",
    format: ["Video", "Text"],
    language: ["English", "Hindi", "Tamil"],
    timeCommitment: {
      hours: 30,
      timeframe: "Total"
    },
    ratings: {
      average: 4.7,
      count: 1560
    },
    careers: ["data-scientist", "ai-engineer"],
    skills: ["python", "machine-learning", "data-analysis"],
    tags: ["AI", "ML", "data science"],
    isFeatured: false,
    completionBadgeImage: "/api/placeholder/60/60",
    successStories: [
      {
        studentName: "Sanjay Kumar",
        quote: "Perfect introduction to ML concepts with practical examples",
        outcome: "Data Scientist at AnalyticsCo",
        imageUrl: "/api/placeholder/50/50"
      }
    ],
    regionSpecific: true,
    region: "India"
  },
  {
    id: "project1",
    title: "E-commerce App with React Native",
    description: "Build a complete mobile commerce application with payment integration",
    type: "project",
    platform: "GitHub",
    platformLogo: "/api/placeholder/120/60",
    url: "https://example.com/project",
    price: "Free",
    currency: "INR",
    difficulty: "Advanced",
    format: ["Interactive", "Text"],
    language: ["English"],
    timeCommitment: {
      hours: 20,
      timeframe: "Total"
    },
    ratings: {
      average: 4.5,
      count: 320
    },
    careers: ["mobile-dev", "frontend"],
    skills: ["react-native", "javascript", "api-integration"],
    tags: ["mobile", "e-commerce", "project-based"],
    isFeatured: false,
    completionBadgeImage: "/api/placeholder/60/60",
    successStories: [],
    regionSpecific: false
  },
  {
    id: "ebook1",
    title: "UI/UX Design Principles",
    description: "Comprehensive guide to user interface and experience design",
    type: "ebook",
    platform: "O'Reilly",
    platformLogo: "/api/placeholder/120/60",
    url: "https://example.com/ebook",
    price: 899,
    currency: "INR",
    difficulty: "Beginner",
    format: ["Text"],
    language: ["English"],
    timeCommitment: {
      hours: 10,
      timeframe: "Total"
    },
    ratings: {
      average: 4.9,
      count: 750
    },
    careers: ["ui-ux", "product-design"],
    skills: ["design-thinking", "wireframing", "user-research"],
    tags: ["design", "UI/UX"],
    isFeatured: false,
    completionBadgeImage: "/api/placeholder/60/60",
    successStories: [],
    regionSpecific: false
  }
];

// Sample career paths data
const careerPaths = [
  { id: "full-stack", name: "Full Stack Developer", color: "#3b82f6" }, // blue
  { id: "frontend", name: "Frontend Developer", color: "#8b5cf6" }, // purple
  { id: "ui-ux", name: "UI/UX Designer", color: "#ec4899" }, // pink
  { id: "data-scientist", name: "Data Scientist", color: "#f59e0b" }, // amber
  { id: "ai-engineer", name: "AI/ML Engineer", color: "#10b981" }, // emerald
  { id: "devops", name: "DevOps Engineer", color: "#ef4444" }, // red
  { id: "cloud-engineer", name: "Cloud Engineer", color: "#06b6d4" }, // cyan
  { id: "mobile-dev", name: "Mobile Developer", color: "#84cc16" } // lime
];

const Resources = () => {
  const [resources, setResources] = useState(resourcesData);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    difficulty: "",
    format: "",
    price: "",
    language: "",
    career: ""
  });
  const [savedResources, setSavedResources] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({...filters, [filterType]: value});
  };

  // Filter resources based on selected filters
  useEffect(() => {
    let filteredResults = resourcesData;
    
    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredResults = filteredResults.filter(
        resource => resource.title.toLowerCase().includes(searchLower) || 
                   resource.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply type filter
    if (filters.type) {
      filteredResults = filteredResults.filter(resource => resource.type === filters.type);
    }
    
    // Apply difficulty filter
    if (filters.difficulty) {
      filteredResults = filteredResults.filter(resource => resource.difficulty === filters.difficulty);
    }
    
    // Apply format filter
    if (filters.format) {
      filteredResults = filteredResults.filter(resource => resource.format.includes(filters.format));
    }
    
    // Apply price filter
    if (filters.price === "Free") {
      filteredResults = filteredResults.filter(resource => resource.price === "Free");
    } else if (filters.price === "Paid") {
      filteredResults = filteredResults.filter(resource => resource.price !== "Free");
    }
    
    // Apply language filter
    if (filters.language) {
      filteredResults = filteredResults.filter(resource => resource.language.includes(filters.language));
    }
    
    // Apply career filter
    if (filters.career) {
      filteredResults = filteredResults.filter(resource => resource.careers.includes(filters.career));
    }
    
    // Apply tab filter
    if (selectedTab === "saved") {
      filteredResults = filteredResults.filter(resource => 
        savedResources.includes(resource.id)
      );
    }
    
    setResources(filteredResults);
  }, [filters, selectedTab, savedResources]);

  // Toggle save resource
  const toggleSaveResource = (resourceId) => {
    if (savedResources.includes(resourceId)) {
      setSavedResources(savedResources.filter(id => id !== resourceId));
    } else {
      setSavedResources([...savedResources, resourceId]);
    }
  };

  // Type icon mapping
  const getTypeIcon = (type) => {
    switch(type) {
      case "course": return <BookOpen className="w-5 h-5" />;
      case "certification": return <Award className="w-5 h-5" />;
      case "tutorial": return <Video className="w-5 h-5" />;
      case "project": return <Code className="w-5 h-5" />;
      case "ebook": return <BookOpen className="w-5 h-5" />;
      case "event": return <Calendar className="w-5 h-5" />;
      case "tool": return <Code className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  // Get career color
  const getCareerColor = (careerId) => {
    const career = careerPaths.find(c => c.id === careerId);
    return career ? career.color : "#64748b"; // Default slate color
  };

  return (
   <div>
     <div className="bg-gradient-to-br from-black to-cyan-900 min-h-screen">
      <div className="container max-w-7xl pt-40 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-cyan-500 mb-2">Educational Resources</h1>
        <p className="text-gray-100 mb-8">Discover learning materials tailored to your career path</p>
        
        {/* Search and Filter Bar */}
        <div className="bg-white/10 border-2 border-white/20 rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 text-gray-100 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for resources..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
              >
                <option value="">All Types</option>
                <option value="course">Courses</option>
                <option value="certification">Certifications</option>
                <option value="tutorial">Tutorials</option>
                <option value="project">Projects</option>
                <option value="ebook">E-books</option>
                <option value="event">Events</option>
                <option value="tool">Tools</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.difficulty}
                onChange={(e) => handleFilterChange("difficulty", e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.format}
                onChange={(e) => handleFilterChange("format", e.target.value)}
              >
                <option value="">All Formats</option>
                <option value="Video">Video</option>
                <option value="Text">Text</option>
                <option value="Interactive">Interactive</option>
                <option value="Live">Live</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.price}
                onChange={(e) => handleFilterChange("price", e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.language}
                onChange={(e) => handleFilterChange("language", e.target.value)}
              >
                <option value="">All Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Marathi">Marathi</option>
                <option value="Bengali">Bengali</option>
                <option value="Gujarati">Gujarati</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-400"
                value={filters.career}
                onChange={(e) => handleFilterChange("career", e.target.value)}
              >
                <option value="">All Career Paths</option>
                {careerPaths.map(career => (
                  <option key={career.id} value={career.id}>{career.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                className={`inline-block py-2 px-4 font-medium ${
                  selectedTab === "all"
                    ? "text-cyan-500 border-b-2 border-cyan-500"
                    : "text-gray-300 hover:text-gray-400 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("all")}
              >
                All Resources
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`inline-block py-2 px-4 font-medium ${
                  selectedTab === "saved"
                    ? "text-cyan-500 border-b-2 border-cyan-500"
                    : "text-gray-300 hover:text-gray-700 hover:border-gray-400"
                }`}
                onClick={() => setSelectedTab("saved")}
              >
                Saved Resources ({savedResources.length})
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`inline-block py-2 px-4 font-medium ${
                  selectedTab === "recommended"
                    ? "text-cyan-500 border-b-2 border-cyan-500"
                    : "text-gray-300 hover:text-gray-400 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab("recommended")}
              >
                Recommended For You
              </button>
            </li>
          </ul>
        </div>
        
        {/* Resources Grid */}
        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(resource => (
              <div key={resource.id} className="bg-white/10 rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
                {/* Resource Card Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="mr-3 p-2 bg-cyan-500 rounded-md">
                        {getTypeIcon(resource.type)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-cyan-500 line-clamp-2">{resource.title}</h3>
                        <p className="text-sm text-gray-200">{resource.platform}</p>
                      </div>
                    </div>
                    <button 
                      className="text-gray-200 hover:text-cyan-500 focus:outline-none"
                      onClick={() => toggleSaveResource(resource.id)}
                    >
                      <Bookmark 
                        className={`w-5 h-5 ${savedResources.includes(resource.id) ? "fill-current text-cyan-500" : ""}`} 
                      />
                    </button>
                  </div>
                </div>
                
                {/* Resource Card Body */}
                <div className="p-4 flex-grow">
                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{resource.description}</p>
                  
                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {resource.careers.slice(0, 2).map(careerId => {
                      const career = careerPaths.find(c => c.id === careerId);
                      return career ? (
                        <span 
                          key={careerId}
                          className="px-2 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: getCareerColor(careerId) }}
                        >
                          {career.name}
                        </span>
                      ) : null;
                    })}
                    
                    {resource.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-200 mb-4">
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Difficulty:</span> {resource.difficulty}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Format:</span> {resource.format.join(", ")}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Time:</span> {resource.timeCommitment.hours} hrs
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Languages:</span> {resource.language.slice(0, 2).join(", ")}
                    </div>
                  </div>
                  
                  {/* Price and Rating */}
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-yellow-500 text-lg">
                      {resource.price === "Free" ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <span>₹{resource.price}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-white font-medium">{resource.ratings.average}</span>
                      <span className="ml-1 text-xs text-gray-200">({resource.ratings.count})</span>
                    </div>
                  </div>
                </div>
                
                {/* Resource Card Footer */}
                <div className="p-4 bg-cyan-500 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {resource.successStories.length > 0 && (
                        <div className="flex items-center text-xs text-gray-950">
                          <Heart className="w-4 h-4 text-red-400 mr-1" />
                          <span>{resource.successStories.length} success stories</span>
                        </div>
                      )}
                    </div>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-yellow-600 text-white rounded-md text-sm font-medium hover:bg-yellow-500 transition"
                    >
                      Open Resource
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/10 rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <Filter className="w-12 h-12 text-gray-100" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No resources found</h3>
            <p className="text-gray-300">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
          </div>
        )}
        
        {/* Skills Progress Section */}
        <div className="mt-12 bg-white/10 border-2 border-white/20 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-cyan-500 mb-4">Your Skill Progress</h2>
          <p className="text-gray-300 mb-6">Track your progress towards your career goals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Skill Progress Cards */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-600 mb-2">React.js</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Progress: 70%</span>
                <span>7/10 resources completed</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-green-600 mb-2">Node.js</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Progress: 40%</span>
                <span>4/10 resources completed</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-pink-600 mb-2">UI/UX Design</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Progress: 25%</span>
                <span>2/8 resources completed</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="px-4 py-2 bg-cyan-500 text-black rounded-md text-sm font-medium hover:bg-cyan-700 cursor-pointer transition">
              View Full Skills Dashboard
            </button>
          </div>
        </div>
        
        {/* Mental Health Resources */}
        <div className="mt-12 bg-white/10 border-2 border-white/20 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-cyan-500 mb-2">Mental Health & Productivity</h2>
            <p className="text-gray-200">Resources to help you maintain balance while pursuing your career goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-medium text-cyan-500 mb-2">Wellness Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Heart className="w-4 h-4 text-red-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Stress Management Techniques</a>
                </li>
                <li className="flex items-center">
                  <Heart className="w-4 h-4 text-red-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Mindfulness for Programmers</a>
                </li>
                <li className="flex items-center">
                  <Heart className="w-4 h-4 text-red-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Preventing Burnout</a>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="font-medium text-cyan-500 mb-2">Productivity Tools</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Pomodoro Timer App</a>
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Task Management Systems</a>
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Focus-enhancing Apps</a>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="font-medium text-cyan-500 mb-2">Support Networks</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Calendar className="w-4 h-4 text-green-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Student Support Groups</a>
                </li>
                <li className="flex items-center">
                  <Calendar className="w-4 h-4 text-green-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Mentor Matching Service</a>
                </li>
                <li className="flex items-center">
                  <Calendar className="w-4 h-4 text-green-500 mr-2" />
                  <a href="#" className="hover:text-cyan-600">Career Counseling Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="mt-12 bg-white/10 border-2 border-white/20 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-cyan-500 mb-4">Upcoming Events & Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-cyan-500">Web Development Hackathon</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">In 2 weeks</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">Build innovative web applications in a 48-hour challenge with industry mentors.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Delhi, Mumbai, Bangalore (Virtual options available)</span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Learn more</a>
              </div>
            </div>
            
              <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-cyan-500">Tech Career Fair</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Next Month</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">Connect with top tech employers and explore internship and job opportunities.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Chennai, Hyderabad, Pune</span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Register now</a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-cyan-500">AI/ML Workshop Series</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Weekly</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">Learn practical machine learning skills through hands-on workshops led by industry experts.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Online (Live sessions)</span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Join series</a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-cyan-500">Open Source Contribution Day</h3>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">This Weekend</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">Start contributing to open source projects with guidance from experienced developers.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Multiple locations + Virtual</span>
                <a href="#" className="text-sm text-blue-600 hover:underline">RSVP now</a>
              </div>
            </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-cyan-500 text-gray-950 rounded-md text-sm font-medium hover:bg-cyan-700 transition">
            View All Events
          </button>
        </div>
      </div>
      
      {/* Career Specific Pathways */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-cyan-500 mb-6">Career-Specific Learning Pathways</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.slice(0, 6).map(career => (
            <div 
              key={career.id} 
              className="bg-white/10 rounded-lg shadow-md overflow-hidden border-t-4"
              style={{ borderTopColor: career.color }}
            >
              <div className="p-6">
                <h3 className="font-bold text-lg text-cyan-500 mb-2">{career.name}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Curated learning paths to help you master the skills needed for a successful {career.name.toLowerCase()} career.
                </p>
                
                <div className="space-y-3 mb-4">
                  <h4 className="font-medium text-cyan-500 text-sm">Core Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {career.id === "full-stack" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">HTML/CSS</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">JavaScript</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">React</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Node.js</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Databases</span>
                      </>
                    )}
                    {career.id === "ui-ux" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">User Research</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Wireframing</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Figma</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Prototyping</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">UX Writing</span>
                      </>
                    )}
                    {career.id === "data-scientist" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Python</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Statistics</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Data Visualization</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Machine Learning</span>
                      </>
                    )}
                    {career.id === "frontend" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">HTML/CSS</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">JavaScript</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">React/Vue/Angular</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Responsive Design</span>
                      </>
                    )}
                    {career.id === "ai-engineer" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Python</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">TensorFlow/PyTorch</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">NLP</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Computer Vision</span>
                      </>
                    )}
                    {career.id === "devops" && (
                      <>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Linux</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">CI/CD</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Docker/Kubernetes</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">Cloud Services</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-4">
                  <span className="font-medium">Top Indian Programs:</span> 
                  {career.id === "full-stack" && (
                    <span> NPTEL Web Development, Scaler Academy, Coding Ninjas</span>
                  )}
                  {career.id === "ui-ux" && (
                    <span> DesignXR courses, IIT Design Program, DesignBoat Academy</span>
                  )}
                  {career.id === "data-scientist" && (
                    <span> IISc Data Science, Upgrad Data Science, Great Learning</span>
                  )}
                  {career.id === "frontend" && (
                    <span> Masai School, Newton School, Function Up</span>
                  )}
                  {career.id === "ai-engineer" && (
                    <span> IIT-M AICTE AI Program, IIIT-H ML Course, BITS Pilani AI Series</span>
                  )}
                  {career.id === "devops" && (
                    <span> CloudThat Training, Edureka DevOps, Naukri Learning</span>
                  )}
                </div>
                
                <a
                  href={`/career-path/${career.id}`}
                  className="block w-full text-center py-2 rounded-md text-white font-medium text-sm hover:opacity-90 transition"
                  style={{ backgroundColor: career.color }}
                >
                  Explore {career.name} Path
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Regional Language Support */}
      <div className="mt-12 bg-white/10 border-2 border-white/20 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-cyan-500 mb-2">Regional Language Resources</h2>
        <p className="text-gray-300 mb-6">Learning materials available in Indian languages</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Hindi</h3>
            <p className="text-sm text-gray-400 mb-3">250+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Tamil</h3>
            <p className="text-sm text-gray-400 mb-3">120+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Telugu</h3>
            <p className="text-sm text-gray-400 mb-3">90+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Bengali</h3>
            <p className="text-sm text-gray-400 mb-3">75+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Marathi</h3>
            <p className="text-sm text-gray-400 mb-3">70+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Gujarati</h3>
            <p className="text-sm text-gray-400 mb-3">50+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Kannada</h3>
            <p className="text-sm text-gray-400 mb-3">45+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-medium text-cyan-500 mb-3">Malayalam</h3>
            <p className="text-sm text-gray-400 mb-3">40+ resources</p>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition">
              Browse Resources
            </button>
          </div>
        </div>
      </div>
      
      {/* Export and Share */}
      <div className="mt-12 bg-white/10 border-2 border-white/20 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-cyan-500 mb-2">Export & Share Your Learning Journey</h2>
            <p className="text-gray-200">Save resources for later or share your learning path with others</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Resources
            </button>
            
            <button className="px-4 py-2 bg-cyan-500 text-black rounded-md text-sm font-medium hover:bg-cyan-700 cursor-pointer transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Learning Path
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='pt-12 mb-12'>
    <Line />
  </div>
   </div>
);
};

export default Resources;