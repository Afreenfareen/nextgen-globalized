// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
  // const [open, setOpen] = useState(false);

  // return (
  //   <nav className="bg-white shadow p-4">
  //     <div className="flex justify-between items-center">
  //       <h1 className="font-bold text-blue-600">NEXTGEN AI</h1>

  //       <div className="hidden md:flex gap-6">
  //         <Link to="/">Home</Link>
  //         <Link to="/about">About</Link>
  //         <Link to="/services">Services</Link>
  //         <Link to="/contact">Contact</Link>
  //       </div>

  //       {/* <button className="md:hidden" onClick={() => setOpen(!open)}>
  //         ☰
  //       </button> */}
  //     </div>

  //     {open && (
  //       <div className="flex flex-col mt-4 gap-3 md:hidden">
  //         <Link to="/">Home</Link>
  //         <Link to="/about">About</Link>
  //         <Link to="/services">Services</Link>
  //         <Link to="/contact">Contact</Link>
  //       </div>
  //     )}
  //   </nav>
  // );
// }


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Search, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         {/* <h1 className="text-xl font-semibold text-blue-600 tracking-wide">
//           NEXTGEN AI
//         </h1> */}

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

//           <Link to="/" className="hover:text-blue-600">Home</Link>

//           <Link to="/about" className="hover:text-blue-600">About</Link>

//           {/* Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
//               Solutions <ChevronDown size={16} />
//             </div>

//             {dropdownOpen && (
//               <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-48 py-2">
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">
//                   AI Solutions
//                 </Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">
//                   Automation
//                 </Link>
//                 <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">
//                   Data Analytics
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className="hover:text-blue-600">Contact</Link>

//           {/* Search */}
//           <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />

//           {/* CTA */}
//           <Link to="/contact">
//             <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
//               Get in Touch
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium">

//           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

//           <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

//           {/* Mobile Dropdown */}
//           <div>
//             <p className="font-semibold">Solutions</p>
//             <div className="ml-4 mt-2 space-y-2 text-sm">
//               <Link to="/services" onClick={() => setMenuOpen(false)}>
//                 AI Solutions
//               </Link>
//               <Link to="/services" onClick={() => setMenuOpen(false)}>
//                 Automation
//               </Link>
//               <Link to="/services" onClick={() => setMenuOpen(false)}>
//                 Data Analytics
//               </Link>
//             </div>
//           </div>

//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>

//           <button className="w-full bg-orange-500 text-white py-2 rounded-md">
//             Get in Touch
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const menuItems = [
//     {
//       name: "About Us",
//       links: ["Company", "Team", "Careers"],
//     },
//     {
//       name: "Services",
//       links: ["AI Solutions", "Automation", "Data Analytics"],
//     },
//   ];

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
//           <h3 className="text-lg font-bold">
//             NEXTGEN <span className="text-orange-600">AI</span>
//           </h3>
//         </div>

//         {/* Menu */}
//         <div className="flex items-center gap-8 text-sm font-medium text-gray-700  navbar">

//           {/* Home */}
//           <Link to="/" className="hover:text-orange-500">
//             Home
//           </Link>          

//           {/* Dropdown Menus */}
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setOpenDropdown(index)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex  gap-1 cursor-pointer hover:text-orange-500">
//                 {item.name}
//                 {/* <span className="text-xs">▼</span> */}
//               </div>

//               {/* Dropdown */}
//               {openDropdown === index && (
//                 <div className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-44">
//                   {item.links.map((link, i) => (
//                     <Link
//                       key={i}
//                       to="/services"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {link}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           {/* Career */}
//           <Link to="/career" className="hover:text-orange-500">
//             Career
//           </Link>

//           {/* Search Icon */}
//           {/* <span className="cursor-pointer text-lg hover:text-orange-500">
//             🔍
//           </span> */}

//           {/* Contact Button */}
//           <Link to="/contact">
//             <button className="bg-orange-500 text-white px-5 py-2 rounded-sm hover:bg-orange-600 transition">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
          <h3 className="text-lg font-bold text-gray-900">
            NEXTGEN <span className="text-orange-600">AI</span>
          </h3>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-10 text-sm font-medium text-gray-700 navbar">

          {/* Home */}
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/about" className="hover:text-orange-500 transition">
              About Us
            </Link>

            {openDropdown === "about" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-44">
                <Link to="/about/company" className="block px-4 py-2 hover:bg-gray-100">
                  Company
                </Link>
                <Link to="/about/team" className="block px-4 py-2 hover:bg-gray-100">
                  Team
                </Link>
                <Link to="/about/careers" className="block px-4 py-2 hover:bg-gray-100">
                  Careers
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/services" className="hover:text-orange-500 transition">
              Services
            </Link>

            {openDropdown === "services" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-52">
                <Link to="/services/ai" className="block px-4 py-2 hover:bg-gray-100">
                  AI Solutions
                </Link>
                <Link to="/services/automation" className="block px-4 py-2 hover:bg-gray-100">
                  Automation
                </Link>
                <Link to="/services/data" className="block px-4 py-2 hover:bg-gray-100">
                  Data Analytics
                </Link>
              </div>
            )}
          </div>

          {/* Career */}
          <Link to="/career" className="hover:text-orange-500 transition">
            Career
          </Link>

          {/* Search Icon (SVG) */}
          {/* <div className="cursor-pointer hover:text-orange-500"> */}
            {/* <div className="cursor-pointer text-gray-700 hover:text-orange-500 text-black text-3xl"> */}
              {/* <div className="text-black text-3xl">🔍</div> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#if2937"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg> */}
              {/* <svg width="20" height="20" stroke="black" fill="none">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
               </svg> */}
          {/* </div> */}

          <div
          className="cursor-pointer text-gray-700 hover:text-orange-500"
          onClick={() => setShowSearch(true)}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
           >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </div>

          {/* Contact Button */}
          <Link to="/contact">
            <button className="bg-orange-500 button text-white px-6 py-2 rounded-sm hover:bg-orange-600 transition">
              Contact Us
            </button>
          </Link>

        </div>
      </div>
    </nav>
    
  );
}