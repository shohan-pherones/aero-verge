import React from "react";
import { Link } from "react-router-dom";

const Account = ({ accountDetails }) => {
  const { firstName, lastName, email } = accountDetails;
  return;
};

export default Account;

{
  /* <div className="h-screen p-20 flex justify-center items-start">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1666115301~exp=1666115901~hmac=8d518e0c3b5fa77d6c5331ba88a3eab1fbec00d26738ce8270fef859e36a6899"
            alt="3D illustration of a cartoon avatar"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{firstName + " " + lastName}</h2>
          <p>{email}</p>
          <div className="card-actions">
            <Link to="/" className="btn btn-primary gap-2 mt-5">
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
              </svg>{" "}
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div> */
}
