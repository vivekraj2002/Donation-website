import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
        Your time and effort are invaluable to us and the people we serve. Join us in making a positive impact and be part of something bigger.

        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/donation.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
