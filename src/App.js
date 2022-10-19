import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Drones from "./components/Drones";
import Support from "./components/Support";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [drones, setDrones] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  const getSubmittedFormData = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/dronesArr")
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong");
          return res.json();
        })
        .then((data) => {
          setDrones(data);
          setIsPending(false);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return (
    <Router>
      <Navbar firstName={firstName} />
      <Switch>
        <Route exact path="/">
          <Home data={{ drones, isPending, error }} />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/drones">
          <Drones data={{ drones, isPending, error }} />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <SignUp receiverFormSubmission={getSubmittedFormData} />
        </Route>
        <Route path="/account">
          <Account accountDetails={{ firstName, lastName, email }} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
