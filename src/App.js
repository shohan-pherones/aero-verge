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

const dronesArr = [
  {
    id: 1,
    title: "DJI Mini 3 Pro",
    price: 759,
    details: `At sub 249 g, Mini 3 Pro doesn't require registration in most countries. The foldable design also makes it easy to carry and store. With forward, backward, and downward vision sensors, ToF, and APAS 4.0, Mini 3 Pro can avoid obstacles, even in complicated environments. Mini 3 Pro records video at up to 4K/60fps. The 1/1.3-inch sensor features dual-native ISO and supports the direct output of HDR footage. Take your creations to new heights with powerful storytelling tools like FocusTrack, MasterShots, and Timelapse. The standard Intelligent Flight Battery provides up to 34 minutes of battery life, enough power to cover your aerial photography needs.`,
    category: "Camera Drones",
    image1:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/95c923686020b536a85470ecc48740ed@ultra.jpg",
    image2:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/9421412f8e83278b37b538744a0913b0@ultra.jpg",
  },
  {
    id: 2,
    title: "DJI Mavic 3",
    price: 2049,
    details: `The 4/3 CMOS Hasselblad camera can effectively suppress noise in low-light environments, delivering higher resolution and dynamic range. Up to 46 minutes of flight time lets you plan flight routes, compose your shots, and capture it all with ease. The upgraded O3+ transmission system enables a 15km* max transmission range and a 1080p/60fps live feed for smooth, stable flights. With omnidirectional obstacle sensing, Mavic 3 can detect obstacles in all directions and plan a safe flight route. Mavic 3 Cine supports Apple ProRes 422 HQ, Apple ProRes 422, and Apple ProRes 422 LT encoding and has a built-in 1TB SSD, facilitating professional creation in every way.`,
    category: "Camera Drones",
    image1:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/a5153d90455fd8d2bce24e8b4fbb6a47@ultra.jpg",
    image2:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/3dc948be659efb2cdb8294d0aa04942b@ultra.jpg",
  },
  {
    id: 3,
    title: "DJI Avata Pro-View Combo",
    price: 1388,
    details: `Lose yourself in total immersion as you swoop and dive like never before. Combine Avata with DJI goggles for a life-like flying experience. Flight is accessible to all with the DJI Motion Controller. It follows your hand movements and allows users of all levels to fly with confidence. Shoot 4K/60fps video with the 155° FOV for visuals that stand out. And keep your footage stable with RockSteady and HorizonSteady. Avata's compact design makes it more convenient to carry and perfect for hitting the tightest gaps. Take it with you and fly like never before. Avata features a built-in propeller guard, an Emergency Brake button, and downward sensors for next-level safety and low-altitude flight.`,
    category: "Camera Drones",
    image1:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/a630765d4a1fb112549017867a23fcfd@ultra.jpg",
    image2:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/230851c6ffa3bc5ff13bb3ab5da042e3@ultra.jpg",
  },
  {
    id: 4,
    title: "DJI Avata Pro-View Combo",
    price: 1388,
    details: `Lose yourself in total immersion as you swoop and dive like never before. Combine Avata with DJI goggles for a life-like flying experience. Flight is accessible to all with the DJI Motion Controller. It follows your hand movements and allows users of all levels to fly with confidence. Shoot 4K/60fps video with the 155° FOV for visuals that stand out. And keep your footage stable with RockSteady and HorizonSteady. Avata's compact design makes it more convenient to carry and perfect for hitting the tightest gaps. Take it with you and fly like never before. Avata features a built-in propeller guard, an Emergency Brake button, and downward sensors for next-level safety and low-altitude flight.`,
    category: "Camera Drones",
    image1:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/a630765d4a1fb112549017867a23fcfd@ultra.jpg",
    image2:
      "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/230851c6ffa3bc5ff13bb3ab5da042e3@ultra.jpg",
  },
];

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [drones, setDrones] = useState(dronesArr);

  const getSubmittedFormData = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
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
          <Drones drones={drones} />
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
