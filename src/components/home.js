import React from "react";
import Card from "./Card"

function Home() {
  return (
    <div className="home page">
      <div className="home-hero">
        <h1>Home page</h1>
        <p className="excerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          exercitationem quos reiciendis, alias architecto quo nulla dolor at
          temporibus suscipit!
        </p>
      </div>
     <Card/>
    </div>
  );
}

export default Home;
