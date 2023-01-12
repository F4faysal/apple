import React from "react";

import Background from '../../asset/hero_iphone14pro__e5xbgo5ffhg2_large.jpg';

const sectionStyle = {
  width: "100%",
  height: "85vh",
  backgroundImage: `url(${Background})`
};

const Home = () => {
  return (
    <div className="hero " style={ sectionStyle }>
      <div className="hero-content text-center " >
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">iPhone 14 Pro</h1>
          <h3 className="py-6 text-3xl text-white">
          Pro. Beyond.
          </h3>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
