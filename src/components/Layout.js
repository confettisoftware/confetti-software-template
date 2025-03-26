// src/components/Layout.js

import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 space-y-2">
        <div>
          <a href="/about" className="text-blue-400 hover:underline mx-2">About</a> |
          <a href="/privacy-policy" className="text-blue-400 hover:underline mx-2">Privacy Policy</a> |
          <a href="/support" className="text-blue-400 hover:underline mx-2">Support</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Confetti Software. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
