import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="sectionStyle  hero items-start w-auto md:w-full h-[85vh] ">
      {/* <div className="hero-content "> </div> */}
      <div className="hero-content   text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">iPhone 14 Pro</h1>
          <h3 className="py-6 text-3xl text-white">Pro. Beyond.</h3>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
