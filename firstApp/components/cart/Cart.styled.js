import styled from "styled-components";
import { Button, ButtonText } from "../common/Buttons";

export const CartWrapper = styled.View`
  width: 90%;
  height: 100%;
  margin-left: 5%;
`;

export const CartHeader = styled.View`
  height: 60px;
  width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartItems = styled.View``;

export const TotalDiv = styled.View`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 7%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalDetails = styled.View`
  width: 50%;
  height: 100%;
`;

export const CheckOutDiv = styled(TotalDetails)`
  width: 50%;
`;

export const CheckOutBtn = styled(Button)`
  width: 100%;
  align-items: center;
  margin: 0;
`;

export const CheckOutBtnText = styled(ButtonText)`
  padding: 0;
`;

export const GoBack = styled.TouchableOpacity``;
