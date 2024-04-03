import React from "react";
import { BackgroundImage } from "./Home.styled";

const Home = () => {
  return (
    <BackgroundImage
      source={require("../../assets/img/home.jpg")}
    ></BackgroundImage>
  );
};

export default Home;
