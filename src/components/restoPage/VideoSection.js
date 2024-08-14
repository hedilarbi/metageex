import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full relative  ">
      <div className="productBlueLeftElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center  px-6 lg:px-0 ">
        <div className=" lg:w-3/4 w-full mx-auto border-white border-opacity-60 rounded-2xl border lg:h-[430px] h-64 ">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/ysSxxIqKNN0?si=i_VocKa0R5aE2flL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
