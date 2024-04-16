import styled from "styled-components";
import { P } from "../common/Text";
import { Button } from "../common/Buttons";
import { ScrollView } from "react-native";

export const Wrapper = styled.View`
  width: 90%;
  margin: 5% 0 0 5%;
`;

export const ItemCartegories = styled.View`
  width: 90%;
  height: 50px;
  margin: 5% 0 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallButton = styled(Button)`
  height: 30px;
  width: auto;
  background-color: ${(props) => (props.clicked ? "#898121" : "transparent")};
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
`;

export const SmallBtnText = styled(P)`
  color: ${(props) =>
    props.clicked ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"};
`;

export const ScrollableView = styled(ScrollView)`
  flex: 1;
`;

export const AllItems = styled.View`
  width: 98%;
  margin: 3% 0 0 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HomeHeader = styled.View`
  height: 60px;
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
