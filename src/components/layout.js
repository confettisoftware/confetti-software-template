import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-6">{children}</main>
            <footer className="bg-gray-800 text-white text-center py-4">
                &copy; {new Date().getFullYear()} Confetti Software. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
