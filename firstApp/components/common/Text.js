import styled from "styled-components";
import { Text } from "react-native";

export const Header = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

export const MediumHeader = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 5%;
`;

export const P = styled(Text)`
  font-size: 14px;
  /* color: rgba(255, 255, 255, 0.8); */
  color: ${({ color }) => color || "rgba(0, 0, 0, 0.6)"};
`;
