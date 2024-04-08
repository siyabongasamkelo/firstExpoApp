import styled from "styled-components";
import { ImageBackground, View } from "react-native";

export const BackgroundImage = styled(ImageBackground)`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const TextContainer = styled(View)`
  width: 90%;
  margin-left: 5%;
  margin-top: 145%;
  text-align: center;
`;
