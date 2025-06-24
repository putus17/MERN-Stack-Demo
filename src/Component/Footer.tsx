    import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

    const Footer = () => {
      return (
        <footer className="bg-indigo-900 text-indigo-100 py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About MERNStack</h3>
              <p className="text-indigo-300 max-w-sm">
                Building powerful web apps with MongoDB, Express, React, and Node.js.  
                Crafted with passion and best practices.
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="grid grid-cols-4 gap-4 text-center text-indigo-600">
                <a href="#" className="flex flex-col items-center hover:text-indigo-400" aria-label="Twitter">
                  <FaTwitter className="text-2xl mb-1" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="flex flex-col items-center hover:text-indigo-400" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl mb-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center hover:text-indigo-400" aria-label="GitHub">
                  <FaGithub className="text-2xl mb-1" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="#" className="flex flex-col items-center hover:text-indigo-400" aria-label="Instagram">
                  <FaInstagram className="text-2xl mb-1" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-end justify-center md:justify-end">
              <div className="text-white text-sm">
                &copy; {new Date().getFullYear()} MERNStack. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
