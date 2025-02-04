import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">Stay updated with our latest Carbon trends</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-green-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-green-600">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-green-600">Cookie Policy</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-green-600">Legal Notice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600">Contact Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
              <li><Link to="/media" className="text-gray-600 hover:text-green-600">Media Kit</Link></li>
              <li><Link to="/jobs" className="text-gray-600 hover:text-green-600">Jobs</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600">About EcoSWAPE</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com" className="text-gray-600 hover:text-green-600">Github</a></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-green-600">Documentation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} EcoSWAPE Aditya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
