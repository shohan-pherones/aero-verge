import { Link } from "react-router-dom";

const Drones = ({ data: { drones, isPending, error }, name, bypassHeight }) => {
  return (
    <section
      className={`container mx-auto py-10  ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <h2 className="text-4xl font-semibold text-center mb-10">
        {name ? name : "Browse all products"}
      </h2>
      {isPending && (
        <p className={`text-xl text-center ${error && "text-rose-500"}`}>
          {!error ? "Loading..." : error}
        </p>
      )}
      <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center">
        {drones &&
          drones.map((drone) => (
            <div className="card w-96 bg-base-100 shadow-lg" key={drone.id}>
              <figure>
                <img src={drone.image1} alt={drone.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{drone.title}</h2>
                <p className="text-xl">
                  Price:{" "}
                  <span className="font-semibold text-rose-500">
                    {drone.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/drone/${drone.id}`} className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Drones;
