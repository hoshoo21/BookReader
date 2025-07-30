import React, {useState} from 'react'

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 md:px-8">
    <div className="flex flex-col  items-center">
      <div className="text-xl font-bold text-gray-800">MyApp</div>

      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <ul className="hidden md:flex space-x-8 mt-4 text-gray-700 font-medium justify-center">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">About</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
    {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
   )
}

export default NavbarComponent