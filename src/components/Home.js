import Slider from "./Slider";
import Categories from "./Categories";
import Drones from "./Drones";
import FAQ from "./FAQ";

const Home = ({ data: { drones, isPending, error } }) => {
  const height = "h-auto";

  return (
    <div>
      <Slider />
      <Categories bypassHeight={height} />
      <Drones data={{ drones, isPending, error }} bypassHeight={height} />
      <FAQ />
    </div>
  );
};

export default Home;
