import { useState } from "react";
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
      receiverFormSubmission({ firstName, lastName, email });
      history.push("/");
    } else setIsWrong("Invalid inputs, please fill out all fields");
  };

  return (
    <section className="container mx-auto text-center min-h-screen py-10">
      <h2 className="text-4xl font-semibold mb-5">Sign up</h2>
      <div className="form-control w-full max-w-xs mx-auto flex flex-col gap-3">
        <div>
          <label className="label" htmlFor="first-name">
            <span className="label-text">First name</span>
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            type="text"
            placeholder="Sarah"
            className={`input input-bordered w-full max-w-xs ${
              isWrong && "border-rose-500"
            }`}
          />
        </div>
        <div>
          <label className="label" htmlFor="last-name">
            <span className="label-text">Last name</span>
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            type="text"
            placeholder="Parker"
            className={`input input-bordered w-full max-w-xs ${
              isWrong && "border-rose-500"
            }`}
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
            className={`input input-bordered w-full max-w-xs ${
              isWrong && "border-rose-500"
            }`}
          />
        </div>
        {isWrong && <p className="text-rose-500 mt-3">* {isWrong}</p>}
        <button
          className="btn btn-primary mt-3"
          type="submit"
          onClick={handleSignUp}
        >
          Create account
        </button>
      </div>
    </section>
  );
};

export default SignUp;
