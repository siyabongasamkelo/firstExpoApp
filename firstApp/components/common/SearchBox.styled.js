import styled from "styled-components";
import { View } from "react-native";

export const SearchBoxWrapper = styled(View)`
  /* background-color: rgba(255, 255, 255, 0.8); */
  background-color: #e5c287;
  height: 70px;
  width: 100%;
  border-radius: 60px;
  margin: 5% 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 3px;
  elevation: 5; */
`;

export const Input = styled.TextInput`
  width: 60%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.7);
`;

export const Icon = styled(View)`
  margin-left: 5%;
`;

export const SearchFilter = styled(View)`
  height: 60px;
  aspect-ratio: 1 / 1;
  background-color: #898121;
  border-radius: 100px;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
