import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="py-5 px-10 md:p-20 bg-heroBg">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-3/5 flex-col space-y-4 md:space-y-10">
          <p className="text-2xl md:text-6xl font-semibold leading-normal ">
            Providing a smart way to{" "}
            <span className="text-orange-500">schedule and update</span> events.
          </p>
          <CustomButton
            type="button"
            title="Get Started"
            handleClick={handleClick}
          />
        </div>
        <img
          src="./planner.jpg"
          alt="hero_img"
          className="w-full md:w-2/3 md:h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
