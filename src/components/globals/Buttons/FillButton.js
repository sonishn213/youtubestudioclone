import React from "react";

const FillButton = ({ children }) => {
  return (
    <button className="bg-blue-400 text-black py-2 px-4 uppercase rounded-sm font-semibold hover:bg-blue-300">
      {children}
    </button>
  );
};

export default FillButton;
