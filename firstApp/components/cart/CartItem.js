import { ItemPrice } from "../common/ItemCard.styled";
import { P, SmallHeader } from "../common/Text";
import {
  CartItemWrapper,
  Image,
  ItemDetails,
  ItemImage,
  Quantity,
  QuatityDiv,
} from "./CartItem.styled";

const CartItem = () => {
  return (
    <CartItemWrapper>
      <ItemImage>
        <Image
          source={require("../../assets/img/item.jpg")}
          resizeMode="cover"
        />
      </ItemImage>
      <ItemDetails>
        <SmallHeader>MkhanyaKude</SmallHeader>
        <P>Classic Watch</P>
        <ItemPrice>$199.99</ItemPrice>
      </ItemDetails>
      <Quantity>
        <QuatityDiv>
          <P>+</P>
        </QuatityDiv>
        <QuatityDiv>
          <P>1</P>
        </QuatityDiv>
        <QuatityDiv>
          <P>-</P>
        </QuatityDiv>
      </Quantity>
    </CartItemWrapper>
  );
};

export default CartItem;
