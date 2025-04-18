import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
  

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600">Choose the plan that works for your needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 w-80">
            <h2 className="text-2xl font-semibold mb-2">Free</h2>
            <p className="text-gray-600 mb-6">Essential tools to get started</p>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">₹0</span>
            </div>
            <p className="text-gray-600 mb-6">Forever free</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Basic career guidance</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Simple resume builder</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Browse job listings</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Limited skill assessments</span>
              </div>
            </div>
            
            <button className="w-full py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">
              Sign Up Free
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 w-80">
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-gray-600 mb-6">Full access to all features</p>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">₹199</span>
              <span className="text-gray-600 ml-2">per month</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Advanced AI career guidance</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Premium resume & LinkedIn optimizer</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Priority job matching & applications</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Unlimited skill assessments</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Advanced accommodation finder</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Unlimited AI chatbot assistance</span>
              </div>
            </div>
            
            <button className="w-full py-3 bg-teal-500 rounded-md text-white font-medium hover:bg-teal-600">
              Start Pro Trial
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 w-80">
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-6">For universities & organizations</p>
            <div className="flex items-baseline mb-6">
              <span className="text-2xl font-bold">Custom</span>
            </div>
            <p className="text-gray-600 mb-6">Contact for pricing</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Bulk student accounts</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Admin dashboard & analytics</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Custom branding</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>API integrations</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>Dedicated support</span>
              </div>
            </div>
            
            <button className="w-full py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}