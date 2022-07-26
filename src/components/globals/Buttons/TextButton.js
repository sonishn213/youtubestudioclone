import React from "react";

const TextButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm bg-transparent text-blue-400 py-2 px-4 uppercase rounded-sm font-semibold hover:text-blue-500 flex items-center "
    >
      {children}
    </button>
  );
};

export default TextButton;
