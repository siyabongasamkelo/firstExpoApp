import styled from "styled-components";
import { Text } from "react-native";

export const Button = styled.TouchableOpacity`
  background-color: #e8751a;
  height: 60px;
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 2%;
`;
