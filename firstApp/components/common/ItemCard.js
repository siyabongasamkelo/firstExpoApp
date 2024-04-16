import React from "react";
import {
  ItemBtnText,
  ItemButton,
  ItemCardWrapper,
  ItemPrice,
  ItemText,
  PriceAndHeart,
  StyledImage,
} from "./ItemCard.styled";
import { Ionicons } from "@expo/vector-icons";

const ItemCard = () => {
  return (
    <ItemCardWrapper>
      <StyledImage source={require("../../assets/img/item.jpg")} />
      <ItemText>Golden Milano</ItemText>
      <PriceAndHeart>
        <ItemPrice>$199.99</ItemPrice>
        <Ionicons name="heart" size={24} color="red" />
      </PriceAndHeart>
      <ItemButton>
        <ItemBtnText>Add to cart</ItemBtnText>
        <Ionicons name="bag" size={24} color="rgba(255,255,255, 0.7)" />
      </ItemButton>
    </ItemCardWrapper>
  );
};

export default ItemCard;
