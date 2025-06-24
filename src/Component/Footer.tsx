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
          <div className="flex space-x-6 text-2xl">
            {/* Replace emoji with SVG icons or react-icons */}
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400">🔗</a>
            <a href="#" aria-label="GitHub" className="hover:text-indigo-400">🐙</a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400">📸</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-indigo-700 pt-6 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} MERNStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
