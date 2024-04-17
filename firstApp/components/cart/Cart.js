import { MediumHeader, P } from "../common/Text";
import {
  CartHeader,
  CartItems,
  CartWrapper,
  CheckOutBtn,
  CheckOutBtnText,
  CheckOutDiv,
  GoBack,
  TotalDetails,
  TotalDiv,
} from "./Cart.styled";
import { Ionicons } from "@expo/vector-icons";
import CartItem from "./CartItem";
import { ItemPrice } from "../common/ItemCard.styled";
import { useNavigation } from "@react-navigation/native";
import { ButtonText } from "../common/Buttons";

const Cart = () => {
  const navigation = useNavigation();

  const handlePreviousScreen = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <CartWrapper>
      <CartHeader>
        <GoBack onPress={handlePreviousScreen}>
          <ButtonText>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="rgba(0,0,0,0.7)"
            />
          </ButtonText>
        </GoBack>
        <MediumHeader>Cart</MediumHeader>
        <Ionicons name="trash-bin-outline" size={24} color="rgba(0,0,0,0.7)" />
      </CartHeader>
      <CartItems>
        <CartItem />
        <CartItem />
      </CartItems>
      <TotalDiv>
        <TotalDetails>
          <P>Price Amount</P>
          <ItemPrice>$199.99</ItemPrice>
        </TotalDetails>
        <CheckOutDiv>
          <CheckOutBtn>
            <CheckOutBtnText>Check Out</CheckOutBtnText>
          </CheckOutBtn>
        </CheckOutDiv>
      </TotalDiv>
    </CartWrapper>
  );
};

export default Cart;
