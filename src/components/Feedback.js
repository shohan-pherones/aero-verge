import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <section className="min-h-screen py-10 mx-auto container text-center flex flex-col gap-3">
      <h2 className="text-4xl font-semibold">Thanks for reaching us out</h2>
      <p>Your submission has been recorded, we'll contact with you later.</p>
      <Link to="/" className="btn btn-primary self-center mt-3">
        Okay, got it
      </Link>
    </section>
  );
};

export default Feedback;
