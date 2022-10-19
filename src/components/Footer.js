import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Aero
          Verge
        </p>
      </div>
    </footer>
  );
};

export default Footer;
