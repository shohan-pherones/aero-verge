import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen container mx-auto text-center flex flex-col gap-2 py-10">
      <h2 className="text-8xl font-bold text-primary">404</h2>
      <h3 className="text-4xl font-semibold">Page not found</h3>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <Link to="/" className="btn btn-primary self-center mt-5">
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
