import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Drone = () => {
  const { id } = useParams();
  const [drone, setDrone] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/dronesArr/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Product not found");
          return res.json();
        })
        .then((data) => {
          setDrone(data);
          setIsPending(false);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return (
    <div className="card card-side bg-base-100 shadow-xl container mx-auto my-20">
      <figure>
        <img src={drone.image2} alt={drone.title} />
      </figure>
      <div className="card-body w-4/5">
        <h2 className="card-title text-5xl">{drone.title}</h2>
        <p>{drone.details}</p>
        <p className="text-2xl font-medium">Price: ${drone.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Go back</button>
          <button className="btn btn-primary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Drone;
