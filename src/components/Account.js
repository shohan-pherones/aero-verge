import React from "react";
import { Link } from "react-router-dom";

const Account = ({ accountDetails }) => {
  const { firstName, lastName, email } = accountDetails;
  return (
    <section className="min-h-screen container mx-auto py-20 pt-40">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto text-center">
        <img
          className="rounded-t-lg"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1666115301~exp=1666115901~hmac=8d518e0c3b5fa77d6c5331ba88a3eab1fbec00d26738ce8270fef859e36a6899"
          alt="3D illustration of a cartoon avatar"
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {firstName + " " + lastName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {email}
          </p>
          <Link
            to="/"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Back to home
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Account;
