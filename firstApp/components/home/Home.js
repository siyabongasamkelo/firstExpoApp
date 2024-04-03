import React from "react";
import { BackgroundImage, Overlay, TextContainer } from "./Home.styled";
import { Header } from "../common/Text";
import { Button, ButtonText } from "../common/Buttons";

const Home = () => {
  return (
    <BackgroundImage source={require("../../assets/img/home.jpg")}>
      <Overlay />
      <TextContainer>
        <Header>The Most Luxurious Watches On The Planet</Header>
        <Button>
          <ButtonText>Shop Now</ButtonText>
        </Button>
      </TextContainer>
    </BackgroundImage>
  );
};

export default Home;
