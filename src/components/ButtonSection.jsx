import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ButtonSection = () => {
  const router=useNavigate();
  return (
    <div className="w-full bg-black flex justify-center items-center">
      <Link to="/video2"><button className="text-black rounded-2xl py-4 px-8 text-xl bg-white" 
      >
        Click Here
      </button></Link>
    </div>
  );
};

export default ButtonSection;
