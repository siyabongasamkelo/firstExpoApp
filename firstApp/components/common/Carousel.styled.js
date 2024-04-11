import { View, Text, ImageBackground, FlatList } from "react-native";
import styled from "styled-components/native";

export const CarouselContainer = styled(View)`
  flex: 1;
`;

export const RoundedImageWrapper = styled(View)`
  border-radius: 20px;
  overflow: hidden;
  width: 170px;
  height: 280px;
  margin: 10px;
  background-color: red;
`;

export const CarouselItem = styled(ImageBackground)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

export const MyFlatList = styled(FlatList)`
  border-radius: 30px;
`;

export const CarouselTxtDiv = styled.View`
  width: 70%;
  height: 20%;
  margin-top: 130%;
`;

export const ItemText = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  font-size: 16px;
`;
