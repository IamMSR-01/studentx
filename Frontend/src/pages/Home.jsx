import { FaPlay } from "react-icons/fa";
import Services from "../components/Services";
import Working from "../components/Working";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import GetStart from "../components/GetStart";

const Home = () => {
  return (
    <div>
      <section className="h-screen max-w-7xl mx-auto py-20 px-6 md:px-12">
        <div className="max-w-8xl h-full mx-auto flex flex-col md:flex-row items-center justify-between gap-18">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Career & Education <br /> Platform
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              Unlock your potential with the power of AI. Get personalized
              career guidance, build stunning resumes, and find perfect
              opportunities.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
                Get Started Free
              </button>
              <button className="border border-gray-300 hover:border-gray-500 text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <FaPlay className="text-xs" /> How it Works
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              <span className="font-bold">10,000+</span> students already using
              StudentX
            </p>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-[#f0f4fa] shadow-2xl rounded-2xl p-2">
            <div className="bg-white/10 h-[450px] shadow-2xl rounded-xl px-10 py-14 text-center relative flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-xl font-semibold mb-2">StudentX Dashboard</h2>
              <p className="text-gray-500">
                Your personalized career journey assistant
              </p>

              {/* Badge Top Right */}
              <div className="absolute top-4 right-4 bg-white shadow px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                AI Assistance
              </div>

              {/* Badge Bottom Left */}
              <div className="absolute -bottom-5 -left-5 bg-white shadow px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Career Ready
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Working />
      <Testimonials />
      <Pricing />
      <FAQ />
      <GetStart />
    </div>
  );
};

export default Home;
