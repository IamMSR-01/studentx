import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Title / Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">StudentX</h2>
          <p className="text-sm text-gray-400 mb-4">
            AI-powered career guidance and education platform for students.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">For Universities</a></li>
            <li><a href="#">For Employers</a></li>
            <li><a href="#">Career Resources</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Legals */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legals</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Data Processing</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} StudentX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
