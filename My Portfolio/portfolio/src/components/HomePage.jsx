import React from "react";
import { Link } from "react-router-dom";

import img1 from "../photo/aman.png";
import { FaArrowRight } from "react-icons/fa";
function HomePage() {
  return (
    <div
      className="content"
      id="homepage"
      class="flex mx-[50px] my-[55px] mt-20"
    >
      <img
        src={img1}
        alt=""
        className="img1 h-[450px] w-[420px] object-contain border-4 border-[#F5CC4C] rounded-[15px] px-[30px]"
      />

      <div className="home-info flex flex-col w-1/2 h-1/3 mx-auto gap-3 p-4 mt-5">
        <h1 className="font-sans text-[#ffb300] text-[2.5rem] text-center">
          {" "}
          I'M AMAN KUMAR
        </h1>
        <h2 className="home-h2 text-[#ffb300] text-[2.3rem] text-center">
          {" "}
          Full Stack Developer
        </h2>
        <p className="text-gray-500 text-[18px] text-left">
          I am a Full Stack Developer and a Full Stack Corporate Trainer. I am
          Training and Developing Apps since 2022. I have lots of Websites and
          Mobile Apps for corporates.
        </p>
        <Link to="/about">
          <div className="btn1 w-3/6 pl-2  text-[18px] border-2 rounded-[30px] border-[#f5cc4c] bg-white text-black flex items-center justify-between overflow-hidden transition-all duration-800 ease-in-out transform hover:-translate-x-2 hover:bg-[#F5CC4C]  hover:text-white">
            Know More About Me
            <button className="ArrowRight relative bg-[#f5cc4c] h-[50px] w-[50px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out">
              <FaArrowRight color="white" size={15} />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
