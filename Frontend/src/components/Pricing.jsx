import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Line from "./Line";

export default function Pricing() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-yellow-500">Simple</span>,{" "}
              <span className="text-cyan-500">Transparent</span>{" "}
              <span className="text-green-600">Pricing</span>
            </h1>
            <p className="text-lg text-gray-300">
              Choose the plan that works for your needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Free Plan */}
            <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-8 rounded-lg shadow-xl hover:shadow-green-600 transition-shadow duration-300 w-80">
              <h2 className="text-3xl text-green-600 font-bold mb-2">Free</h2>
              <p className="text-gray-300 mb-6">
                Essential tools to get started
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl text-cyan-500 font-bold">₹0</span>
              </div>
              <p className="text-gray-300 mb-6">Forever free</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Basic career guidance</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Simple resume builder</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Browse job listings</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Limited skill assessments
                  </span>
                </div>
              </div>

              <Link className="flex justify-center items-center w-full py-3 border-2 border-white/20 rounded-md text-white bg-green-600 font-medium hover:bg-green-400">
                Sign Up Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-8 rounded-lg shadow-xl hover:shadow-cyan-600 transition-shadow duration-300 w-80">
              <h2 className="text-3xl text-cyan-500 font-bold mb-2">Pro</h2>
              <p className="text-gray-300 mb-6">Full access to all features</p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl text-cyan-500 font-bold">₹199</span>
                <span className="text-cyan-500 ml-2">per month</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Advanced AI career guidance
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Premium resume & LinkedIn optimizer
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Priority job matching & applications
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Unlimited skill assessments
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Advanced accommodation finder
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Unlimited AI chatbot assistance
                  </span>
                </div>
              </div>

              <Link className="flex justify-center items-center w-full py-3 border-2 border-white/20 rounded-md text-white bg-cyan-500 font-medium hover:bg-cyan-600">
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-8 rounded-lg shadow-xl hover:shadow-yellow-500 transition-shadow duration-300 w-80">
              <h2 className="text-2xl text-yellow-500 font-semibold mb-2">
                Enterprise
              </h2>
              <p className="text-gray-300 mb-6">
                For universities & organizations
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-2xl text-cyan-500 font-bold">Custom</span>
              </div>
              <p className="text-gray-300 mb-6">Contact for pricing</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Bulk student accounts</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Admin dashboard & analytics
                  </span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Custom branding</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">API integrations</span>
                </div>
                <div className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">Dedicated support</span>
                </div>
              </div>

              <Link className="flex justify-center items-center w-full py-3 border-2 border-white/20 rounded-md text-white bg-yellow-500 font-medium hover:bg-yellow-300">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Line />
      </div>
    </div>
  );
}
