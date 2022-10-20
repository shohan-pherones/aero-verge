import Categories from "./Categories";
import Drones from "./Drones";
import FAQ from "./FAQ";
import Slider from "./Slider";

const Home = ({ data: { drones, isPending, error } }) => {
  return (
    <div>
      <Slider />
      <Categories />
      <Drones data={{ drones, isPending, error }} />
      <FAQ />
    </div>
  );
};

export default Home;
