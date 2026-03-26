import { useEffect, useRef } from "react";

export default function SearchOverlay({ show, onClose }) {
  const inputRef = useRef(null);

  // Auto focus input when opened
  useEffect(() => {
    if (show) {
      inputRef.current?.focus();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-24 z-50"
      onClick={onClose} // close on outside click
    >
      {/* Search Box */}
      <div
        className="bg-white w-[600px] max-w-[90%] rounded-lg shadow-lg p-4 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-lg"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Input */}
        <div className="flex items-center border rounded-md px-4 py-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-gray-700"
          />

          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </div>
      </div>
    </div>
  );
}