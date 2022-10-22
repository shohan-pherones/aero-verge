import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Drones from "./Drones";

const Category = () => {
  const { name } = useParams();
  const [drones, setDrones] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://aero-verge.herokuapp.com/dronesArr")
        .then((res) => {
          if (!res.ok)
            throw new Error("Something went wrong, please try again later!");
          return res.json();
        })
        .then((data) => {
          const newData = data.filter((data) => data.category === name);
          setDrones(newData);
          setIsPending(false);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return <Drones data={{ drones, isPending, error }} name={name} />;
};

export default Category;
