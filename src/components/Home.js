import React from "react";
import Categories from "./Categories";
import Drones from "./Drones";
import Slider from "./Slider";

const Home = ({ data: { drones, isPending, error } }) => {
  return (
    <div>
      <Slider />
      <Categories />
      <Drones data={{ drones, isPending, error }} />
    </div>
  );
};

export default Home;
