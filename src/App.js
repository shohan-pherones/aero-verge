import React, { useState } from "react";
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
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const getSubmittedFormData = (data) => {
    setFirstName(data.firstName);
    setlastName(data.lastName);
    setEmail(data.email);
  };

  return (
    <Router>
      <Navbar firstName={firstName} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/drones">
          <Drones />
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
