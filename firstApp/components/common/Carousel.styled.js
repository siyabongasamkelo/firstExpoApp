import styled from "styled-components";
import { View, Text } from "react-native";

export const CarouselContainer = styled(View)`
  flex: 1;
`;

export const CarouselItem = styled(View)`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled(Text)`
  color: #333;
  font-size: 16px;
`;
