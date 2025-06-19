// src/components/Layout.js

import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content: flex-1 to fill remaining space */}
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>

      {/* Footer anchored to bottom */}
      <footer className="mt-auto flex-shrink-0 bg-gray-800 text-white text-center py-4 space-y-2">
        <div>
          <Link href="/about" className="text-blue-400 hover:underline mx-2">About</Link> |
          <Link href="/privacy-policy" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link> |
          <Link href="/support" className="text-blue-400 hover:underline mx-2">Support</Link>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Confetti Software. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
