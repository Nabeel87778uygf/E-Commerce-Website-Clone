import { FaChevronRight, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="font-sans max-w-7xl mx-auto px-4">
            {/* Top bar with "Exclusive" and navigation links */}
            <div className="flex justify-between items-center py-4 border-b">
                <div className="text-2xl font-bold">Exclusive</div>
                <div className="flex space-x-8">
                    <a href="#" className="hover:text-gray-600">Home</a>
                    <a href="#" className="hover:text-gray-600">Contact</a>
                    <a href="#" className="hover:text-gray-600">About</a>
                    <a href="#" className="hover:text-gray-600">Sign Up</a>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="pl-4 pr-10 py-2 border rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
            </div>

            
        </div>
    );
};

export default Navbar;