import React from "react";
import Header from "../../components/Header";
import Blog from "../../components/Blog";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="bg-transparent head-bg">
        <Header />
      </div>
      <Blog />
    </>
  );
};

export default Home;
