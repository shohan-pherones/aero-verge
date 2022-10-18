import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="h-screen p-20 flex flex-col
    items-center gap-5"
    >
      <h2 className="text-4xl font-medium">About us</h2>
      <p>
        Buying a drone is not rocket science anymore! Aero Verge is the world's
        first online drone market, with everything you need to know about
        drones. We have a wide variety of drones, including quadcopters and
        hexacopters. We also have camera drones, racing drones, toy drones, and
        more. It's really easy to shop for drones on our website too. All you
        need to do is select your budget and type of drone - that's it!
      </p>
      <p>
        Aero Verge is a one-stop shop for drones of all shapes and sizes. Browse
        our wide selection of drones ranging from toy drones to professional
        ones, a variety of other drone products and drone accessories. Get the
        best deals on drones from Aero Verge!
      </p>
      <Link to="/" className="btn gap-2 bg-cyan-500 border-cyan-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Back to home
      </Link>
    </div>
  );
};

export default About;
