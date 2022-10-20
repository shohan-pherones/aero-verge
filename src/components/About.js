import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container mx-auto py-10 min-h-screen">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-semibold text-center">About us</h2>
        <p>
          Buying a drone is not rocket science anymore! Aero Verge is the
          world's first online drone market, with everything you need to know
          about drones. We have a wide variety of drones, including quadcopters
          and hexacopters. We also have camera drones, racing drones, toy
          drones, and more. It's really easy to shop for drones on our website
          too. All you need to do is select your budget and type of drone -
          that's it!
        </p>
        <p>
          Aero Verge is a one-stop shop for drones of all shapes and sizes.
          Browse our wide selection of drones ranging from toy drones to
          professional ones, a variety of other drone products and drone
          accessories. Get the best deals on drones from Aero Verge!
        </p>

        <Link to="/" className="btn btn-primary self-center mt-3">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default About;
