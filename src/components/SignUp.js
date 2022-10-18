import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = ({ receiverFormSubmission }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isWrong, setIsWrong] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      history.push("/");
      receiverFormSubmission({ firstName, lastName, email });
    } else setIsWrong("Wrong inputs");
  };

  return (
    <form className="flex flex-col gap-10 items-center p-20  h-screen">
      <h2 className={`text-4xl font-medium ${isWrong && "text-rose-500"}`}>
        {!isWrong ? "Sign up here" : isWrong}
      </h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="First name"
          className={`input input-bordered w-96 ${
            isWrong && "border-rose-500"
          }`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          className={`input input-bordered w-96 ${
            isWrong && "border-rose-500"
          }`}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
      </div>
      <button className="btn" type="submit" onClick={handleSignUp}>
        Submit
      </button>
    </form>
  );
};

export default SignUp;
