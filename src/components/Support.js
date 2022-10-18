import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Support = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isWrong, setIsWrong] = useState("");
  const history = useHistory();

  const handleSupportForm = (e) => {
    e.preventDefault();
    if (fullName && email && message) {
      history.push("/");
    } else {
      setIsWrong("Wrong inputs");
    }
  };

  return (
    <form className="flex flex-col gap-10 items-center p-20  h-screen">
      <h2 className={`text-4xl font-medium ${isWrong && "text-rose-500"}`}>
        {!isWrong ? "Support center" : isWrong}
      </h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full name"
          className={`input input-bordered w-96 ${
            isWrong && "border-rose-500"
          }`}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address"
          className={`input input-bordered w-96 ${
            isWrong && "border-rose-500"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows="5"
          className={`textarea textarea-bordered w-96 text-base resize-none ${
            isWrong && "border-rose-500"
          }`}
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="btn" type="submit" onClick={handleSupportForm}>
        Submit
      </button>
    </form>
  );
};

export default Support;
