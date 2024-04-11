import React from "react";
// import { FlatList } from "react-native";
import {
  CarouselContainer,
  CarouselItem,
  CarouselTxtDiv,
  FlatList,
  ItemText,
  MyFlatList,
  RoundedImageWrapper,
} from "./Carousel.styled";
// import item from "../../assets/img/item.jpg";

const data = [
  { id: 1, text: "Mkhanyakude Dulux" },
  { id: 2, text: "Octa nano 5" },
  { id: 3, text: "Golden Milano" },
];

const ItemCarousel = () => {
  const renderItem = ({ item }) => (
    <RoundedImageWrapper>
      <CarouselItem
        source={require("../../assets/img/item.jpg")}
        resizeMode="cover"
      >
        <CarouselTxtDiv>
          <ItemText>{item.text}</ItemText>
        </CarouselTxtDiv>
      </CarouselItem>
    </RoundedImageWrapper>
  );

  return (
    <CarouselContainer>
      <MyFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()} // Ensure to include the index argument
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </CarouselContainer>
  );
};

export default ItemCarousel;
