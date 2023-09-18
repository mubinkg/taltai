"use client";
import { Button } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-between items-center">
          <div>avator</div>
          <div className="font-semibold text-8xl leading-12 mx-5 tracking-heroTitle text-center">
            Your Ultimate All-in-One Solution for Job Seekers! 🚀
          </div>
          <div>avator</div>
        </div>
        <div>
          It is a long established fact that a reader will be distracted by 🔥
          the readable content of a page 💼 when looking at its layout.
        </div>
        <Button color="blue">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
