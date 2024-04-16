import styled from "styled-components";
import { Image } from "react-native";
import { SmallBtnText } from "../home/Home.styled";
import { Button, ButtonText } from "./Buttons";

export const ItemCardWrapper = styled.View`
  height: 200px;
  width: 45%;
  margin: 5% 0 20% 3.5%;
  border-radius: 10px;
  /* background-color: #e5c287; */
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 80%;
  border-radius: 10px;
`;

export const ItemText = styled(SmallBtnText)`
  padding-top: 5%;
`;

export const ItemPrice = styled(ItemText)`
  font-size: 16px;
  font-weight: 700;
`;

export const PriceAndHeart = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemButton = styled(Button)`
  width: 100%;
  height: 35px;
  margin: 0;
  margin-top: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ItemBtnText = styled(ButtonText)`
  font-size: 11px;
`;
