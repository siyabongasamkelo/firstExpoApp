import { ImageBackground } from "react-native";
import styled from "styled-components";

export const CartItemWrapper = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemImage = styled.View`
  width: 30%;
  height: 100%;
`;

export const Image = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

export const ItemDetails = styled.View`
  width: 40%;
  height: 100%;
`;

export const Quantity = styled.View`
  height: 100%;
  width: 15%;
`;

export const QuatityDiv = styled.View`
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
