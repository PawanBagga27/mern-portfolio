import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption, profileImg} = intro;
  return (
    <div className="flex w-full items-center sm:flex-col">
    <div className="h-[70vh] w-1/2 sm:w-full bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ""} </h1>
      <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-4xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>
    </div>

    <div className="flex flex-col gap-5 w-1/2 sm:w-full">
    <lottie-player
            src={profileImg}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
    </div>

    </div>
  );
}

export default Intro;
