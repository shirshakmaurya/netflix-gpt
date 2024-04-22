import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-16 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-4 text-m w-1/3">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="py-1 md:py-2 px-3 md:px-10 w-20 md:w-32 bg-white text-black font-bold rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 p-2 px-10 bg-gray-500 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
