import Carousel from "react-native-snap-carousel";
import { CarouselContainer, CarouselItem, ItemText } from "./Carousel.styled";

const data = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
];

const ItemCarousel = () => {
  const renderItem = ({ item }) => (
    <CarouselItem>
      <ItemText>{item.text}</ItemText>
    </CarouselItem>
  );

  return (
    <CarouselContainer>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={200}
        itemWidth={200}
      />
    </CarouselContainer>
  );
};

export default ItemCarousel;
