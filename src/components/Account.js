import { Link } from "react-router-dom";

const Account = ({ accountDetails }) => {
  const { firstName, lastName, email } = accountDetails;
  return (
    <section className="container mx-auto min-h-screen py-10">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1666115301~exp=1666115901~hmac=8d518e0c3b5fa77d6c5331ba88a3eab1fbec00d26738ce8270fef859e36a6899"
            alt="3D illustration of a cartoon avatar"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{firstName + " " + lastName}</h2>
          <p>{email}</p>
          <div className="card-actions">
            <Link to="/" className="btn btn-primary mt-5">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
