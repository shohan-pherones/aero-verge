import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Support = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isWrong, setIsWrong] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSupportForm = (e) => {
    e.preventDefault();

    if (fullName && email && message) {
      history.push("/feedback");
    } else {
      setIsWrong("Invalid inputs!");
    }
  };

  return (
    <section className="container mx-auto text-center min-h-screen py-20">
      <h2
        className={`text-4xl font-semibold mb-5 ${isWrong && "text-rose-500"}`}
      >
        {!isWrong ? "Need help?" : isWrong}
      </h2>
      <div className="form-control w-full max-w-xs mx-auto flex flex-col gap-3">
        <div>
          <label className="label" htmlFor="full-name">
            <span className="label-text">Full name</span>
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="full-name"
            type="text"
            placeholder="Sarah Parker"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            <span className="label-text">Email address</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="hello@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label" htmlFor="message">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows="5"
            placeholder="Write your message"
            className="textarea textarea-bordered w-full max-w-xs resize-none text-base"
          />
        </div>
        <button
          className="btn btn-primary mt-5"
          type="submit"
          onClick={handleSupportForm}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Support;
