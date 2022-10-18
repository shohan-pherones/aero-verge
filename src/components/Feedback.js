import React from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className="h-screen p-20 flex flex-col items-center gap-5">
      <h2 className="text-4xl font-medium">Thanks for contacting us</h2>
      <p>We'll give you a feedback into your mail</p>
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

export default Feedback;
