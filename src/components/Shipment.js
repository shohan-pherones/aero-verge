import { Link } from "react-router-dom";

const Shipment = () => {
  return (
    <section className="min-h-screen container mx-auto text-center flex flex-col gap-4 py-10">
      <h2 className="text-6xl font-bold text-primary">Sorry :(</h2>
      <h3 className="text-2xl font-semibold">
        This feature hasn't been implemented yet!
      </h3>
      <Link to="/" className="btn btn-primary self-center mt-4">
        Back to home
      </Link>
    </section>
  );
};

export default Shipment;
