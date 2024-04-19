import styled from "styled-components";
import { CartHeader } from "../cart/Cart.styled";
import { ImageBackground, Image } from "react-native";
import { MediumHeader, P } from "../common/Text";
import { ItemPrice } from "../common/ItemCard.styled";

export const UserProfileWrapper = styled.View`
  height: 100%;
  width: 90%;
  margin: 0 0 0 5%;
`;

export const CoverPhoto = styled(ImageBackground)`
  height: 50%;
  width: 110%;
  margin-top: 10%;
  margin-left: -5.5%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfilePic = styled(Image)`
  width: 110px;
  height: 110px;
  aspect-ratio: 1 / 1;
  border-radius: 100px;
  position: absolute;
  left: 32%;
  top: 22%;
  z-index: 9;
`;

export const Darkener = styled.View`
  width: auto;
  aspect-ratio: 1 / 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
`;

export const ProfileHeaderText = styled(MediumHeader)`
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const ProfileHeader = styled(CartHeader)`
  margin-top: 0;
`;

export const UserDetails = styled.View`
  width: 100%;
  margin-top: -38%;
`;

export const UserName = styled(ItemPrice)`
  text-align: center;
  margin: -5%;
  font-size: 22px;
`;

export const SmallText = styled(P)`
  text-align: center;
  margin: 0;
  margin-top: 7%;
`;

export const UserSettings = styled.View``;

export const Setting = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const NameAndIcon = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
