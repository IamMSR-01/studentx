import React from "react";
import {
  Briefcase,
  Star,
  Users,
  Monitor,
  DollarSign,
  PieChart,
  MessageCircle,
  Award,
  Compass,
  FileText,
  CheckCircle,
  Zap,
} from "lucide-react";

const FreelanceMarketplace = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "UI Designer",
      text: "FreelanceX helped me find my niche and triple my client base in just 2 months.",
      image: "https://images.pexels.com/photos/4639524/pexels-photo-4639524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sarah Johnson",
      role: "Content Writer",
      text: "The pricing assistant helped me realize I was undercharging by 40%.",
      image: "https://images.pexels.com/photos/4639524/pexels-photo-4639524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Michael Chen",
      role: "Full-Stack Developer",
      text: "The skill assessments gave me confidence. My income has increased by 65%.",
      image: "https://images.pexels.com/photos/4639524/pexels-photo-4639524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const features = [
    {
      icon: <Compass size={24} className="text-cyan-500" />,
      title: "Career Pathfinder",
      description: "AI picks niches based on your strengths and demand.",
    },
    {
      icon: <Award size={24} className="text-cyan-500" />,
      title: "Skill Certification",
      description: "Test your skills. Earn real credibility.",
    },
    {
      icon: <Users size={24} className="text-cyan-500" />,
      title: "Client Matching",
      description: "Find gigs aligned with your expertise.",
    },
    {
      icon: <Monitor size={24} className="text-cyan-500" />,
      title: "Profile Optimizer",
      description: "Make your profiles stand out across platforms.",
    },
    {
      icon: <DollarSign size={24} className="text-cyan-500" />,
      title: "Pricing Assistant",
      description: "Set competitive rates. Negotiate smartly.",
    },
    {
      icon: <PieChart size={24} className="text-cyan-500" />,
      title: "Finance Tracker",
      description: "Track income. Predict cash flow.",
    },
    {
      icon: <MessageCircle size={24} className="text-cyan-500" />,
      title: "AI Coach",
      description: "Freelancing tips 24/7.",
    },
  ];

  const steps = [
    {
      icon: <FileText className="text-cyan-400" size={24} />,
      title: "Assess",
      description: "Skill quiz to kickstart",
    },
    {
      icon: <Compass className="text-cyan-400" size={24} />,
      title: "Plan",
      description: "Custom freelance roadmap",
    },
    {
      icon: <Star className="text-cyan-400" size={24} />,
      title: "Optimize",
      description: "Polish profile & portfolio",
    },
    {
      icon: <Zap className="text-cyan-400" size={24} />,
      title: "Launch",
      description: "Start landing gigs",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black to-cyan-900">
      <div className="min-h-screen text-white max-w-7xl mx-auto font-sans">
        {/* Hero */}
        <section className="py-20 text-center pt-40 px-6">
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">FreelanceX</h1>
          <p className="text-xl mb-6 text-white/80">
            Your AI-Powered Freelance Career Companion
          </p>
          <p className="mb-8 max-w-2xl mx-auto text-white/60">
            Launch, grow, and thrive in your freelance journey with tailored
            tools and smart guidance.
          </p>
          <button className="bg-cyan-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-cyan-300 transition">
            Get Started Free
          </button>
        </section>

        {/* Features */}
        <section className="py-16 px-6 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md hover:shadow-cyan-500/30 transition"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="ml-3 text-lg font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              How It Works
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {steps.map((step, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/4 text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-white/10 border border-white/20 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md hover:shadow-cyan-500/30 transition"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-sm text-white">{t.name}</h4>
                    <p className="text-cyan-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">"{t.text}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Ready to conquer freelancing?
          </h2>
          <p className="text-white/70 mb-8">
            Let AI streamline your success — get started in minutes!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-400 text-black font-semibold py-3 px-8 rounded-md hover:bg-cyan-300 transition">
              Start Free Trial
            </button>
            <button className="border border-white/20 py-3 px-8 rounded-md text-white hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelanceMarketplace;
