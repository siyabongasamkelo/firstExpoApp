import React from "react";
import { BackgroundImage, Overlay, TextContainer } from "./Welcome.styled";
import { Header } from "../common/Text";
import { Button, ButtonText } from "../common/Buttons";

const Welcome = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Home");
  };

  return (
    <BackgroundImage source={require("../../assets/img/home.jpg")}>
      <Overlay />
      <TextContainer>
        <Header>The Most Luxurious Watches On The Planet</Header>
        <Button onPress={handleButtonPress}>
          <ButtonText>Shop Now</ButtonText>
        </Button>
      </TextContainer>
    </BackgroundImage>
  );
};

export default Welcome;
