import React from "react";

const Drones = ({ data: { drones, isPending, error } }) => {
  return (
    <div className="drones-section flex flex-col gap-10 text-center p-20 items-center">
      <h2 className="text-4xl font-medium">Browse all items</h2>
      <div className="drones-wrapper  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start text-left">
        {isPending && (
          <p className="col-span-2 text-xl">{!error ? "Loading..." : error}</p>
        )}
        {drones &&
          drones.map((drone) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={drone.id}>
              <figure>
                <img src={drone.image1} alt={drone.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{drone.title}</h2>
                <p className="text-lg">{`FROM USD $${drone.price}`}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Drones;
