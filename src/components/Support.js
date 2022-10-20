import { useState } from "react";
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
      setIsWrong("Invalid inputs, please fill out all fields");
    }
  };

  return (
    <section className="container mx-auto text-center min-h-screen py-10">
      <h2 className="text-4xl font-semibold mb-5">Need help?</h2>
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
            className={`textarea textarea-bordered w-full max-w-xs resize-none text-base ${
              isWrong && "border-rose-500"
            }`}
          />
        </div>
        {isWrong && <p className="text-rose-500 mt-3">* {isWrong}</p>}
        <button
          className="btn btn-primary mt-3"
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
