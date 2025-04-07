import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Logo and Name */}
        <div className="text-xl font-bold flex items-center space-x-2">
          <Link href="/">
          <Image 
            src="/logonew1.png" // Ensure the file is in the 'public' folder
            alt="MedBro Logo"
            width={40} 
            height={40} 
          />
          </Link>
          <Link href="/" className="hover:text-gray-300 transition duration-200">MedBro</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer transition duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
