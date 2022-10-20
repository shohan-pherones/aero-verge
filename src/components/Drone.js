import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

const Drone = () => {
  const { id } = useParams();
  const [drone, setDrone] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");
  const [vat, setVat] = useState("");
  const [shipping, setShipping] = useState("");
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/dronesArr/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Product not found!");
          return res.json();
        })
        .then((data) => {
          setDrone(data);
          setVat((data.price / 100) * 10);
          setShipping(data.price < 500 ? 50 : 100);
          setIsPending(false);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return (
    <section className="container mx-auto py-10 min-h-screen">
      {isPending && (
        <p className={`text-xl text-center ${error && "text-rose-500"}`}>
          {!error ? "Loading..." : error}
        </p>
      )}
      {drone.image2 && drone.title && drone.details && drone.price ? (
        <div className="card lg:card-side bg-base-100 shadow-lg">
          <figure>
            <img src={drone.image2} alt={drone.title} className="w-full" />
          </figure>
          <div className="card-body lg:w-3/4">
            <h2 className="card-title text-6xl mb-5">{drone.title}</h2>
            <p className="mb-5">{drone.details}</p>
            <div>
              <p className="text-xl">
                Price:{" "}
                {drone.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-xl">
                VAT:{" "}
                {vat.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-xl border-b-2 pb-3">
                Shipping:{" "}
                {shipping.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-3xl text-rose-500 pt-2">
                Subtotal:{" "}
                {(drone.price + vat + shipping).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="card-actions justify-end gap-5">
              <button onClick={history.goBack} className="btn btn-outline">
                Go back
              </button>
              <Link to="/shipment" className="btn btn-primary">
                Order now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Drone;
