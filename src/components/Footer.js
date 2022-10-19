import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Aero Verge
          </span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/categories" class="mr-4 hover:underline md:mr-6">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/drones" class="mr-4 hover:underline md:mr-6 ">
              Drones
            </Link>
          </li>
          <li>
            <Link to="/support" class="hover:underline">
              Support
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <Link to="/" class="hover:underline">
          Aero Verge
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
