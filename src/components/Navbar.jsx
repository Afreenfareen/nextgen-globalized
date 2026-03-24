// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between p-4 bg-white shadow">
//       <h1 className="font-bold">MySite</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-blue-600">NEXTGEN AI</h1>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-3 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}