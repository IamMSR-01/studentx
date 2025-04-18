import React from "react";
import { FaHeart } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechStart Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "₹6-8 LPA",
    skills: ["React", "JavaScript", "CSS"],
    match: 87,
    date: "2 days ago",
  },
  {
    title: "UX Design Intern",
    company: "DesignHub",
    location: "Mumbai, India",
    type: "Internship",
    salary: "₹15-20K/month",
    skills: ["Figma", "UI/UX", "Research"],
    match: 92,
    date: "1 day ago",
  },
  {
    title: "Data Analyst",
    company: "FinTech Solutions",
    location: "Hybrid",
    type: "Full-time",
    salary: "₹5-7 LPA",
    skills: ["SQL", "Python", "Excel"],
    match: 78,
    date: "5 days ago",
  },
  {
    title: "Backend Developer",
    company: "Cloud Systems",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹7-10 LPA",
    skills: ["Node.js", "Express", "MongoDB"],
    match: 81,
    date: "3 days ago",
  },
];

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-1">Job & Internship Board</h1>
      <p className="text-gray-600 mb-6">Discover opportunities matching your skills and interests</p>
      <div className="flex gap-6">
        {/* Left Filters */}
        <div className="w-1/3 p-6 rounded-xl shadow-md bg-[#f9fbfd]">
          <h2 className="text-xl font-semibold mb-4">Smart Filters</h2>
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            className="w-full p-2 mb-4 rounded border"
          />

          <div className="mb-4">
            <label className="font-medium">Job Type</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Full-time", "Part-time", "Internship", "Freelance", "Contract"].map((type) => (
                <button key={type} className="px-3 py-1 bg-white rounded-full border text-sm">
                  {type}
                </button>
              ))}
            </div>
          </div>

          <select className="w-full p-2 mb-4 border rounded">
            <option>All Locations</option>
          </select>

          <select className="w-full p-2 mb-4 border rounded">
            <option>All Levels</option>
          </select>

          <div className="mb-4">
            <label className="font-medium">Skills</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "JavaScript", "Python", "UI/UX", "SQL"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white rounded-full border text-sm">
                  {skill}
                </span>
              ))}
              <button className="px-3 py-1 bg-white rounded-full border text-sm">+ Add Skill</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="aiMatch" />
            <label htmlFor="aiMatch">Show AI matches only</label>
          </div>
        </div>

        {/* Right Jobs List */}
        <div className="w-2/3">
          {/* Tabs and Sort */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
              {["Recommended", "Recent", "Saved", "Applied"].map((tab) => (
                <button key={tab} className="px-4 py-2 bg-[#f4f4f4] rounded-full font-medium">
                  {tab}
                </button>
              ))}
            </div>
            <select className="border p-2 rounded">
              <option>Match % (High to Low)</option>
              <option>Match % (Low to High)</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="p-4 rounded-xl shadow-md bg-[#f9fbfd] flex justify-between items-start"
              >
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600">
                    {job.company} • {job.location}
                  </p>
                  <div className="text-sm text-gray-500 flex gap-4 mt-1">
                    <span>{job.type}</span>
                    <span>{job.salary}</span>
                    <span>{job.date}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm bg-white px-2 py-1 rounded-full border"
                      >
                        {skill}
                      </span>
                    ))}
                    <span className="text-sm text-gray-500">+1 more</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 font-semibold text-sm mb-2">
                    {job.match}% Match
                  </span>
                  <button className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full">
                    <FaHeart className="text-gray-400" /> Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
