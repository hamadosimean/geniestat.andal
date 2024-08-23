import React from "react";
import Hero from "./Hero";
import Content from "./Content";
function Home() {
  return (
    <div>
      <div className="home">
        <Hero />
        <Content />
      </div>
    </div>
  );
}

export default Home;
