import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content py-10">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link to="/" className="hover:underline">
            Aero Verge
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
