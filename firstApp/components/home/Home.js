import {
  AllItems,
  ItemCartegories,
  ScrollableView,
  SmallBtnText,
  SmallButton,
  Wrapper,
} from "./Home.styled";
import { MediumHeader, P } from "../common/Text";
import SearchBox from "../common/SearchBox";
import { SafeAreaView } from "react-native";
import ItemCarousel from "../common/Carousel";
import { useState } from "react";
import ItemCard from "../common/ItemCard";

const Home = () => {
  const [btnOneClick, setBtnOneClick] = useState(true);
  const [btnTwoClick, setBtnTwoClick] = useState(false);
  const [btnThreeClick, setBtnThreeClick] = useState(false);

  const btnClickHandler = (number) => {
    if (number === 1) {
      setBtnOneClick(true);
      setBtnTwoClick(false);
      setBtnThreeClick(false);
    }
    if (number === 2) {
      setBtnTwoClick(true);
      setBtnOneClick(false);
      setBtnThreeClick(false);
    }
    if (number === 3) {
      setBtnThreeClick(true);
      setBtnOneClick(false);
      setBtnTwoClick(false);
    }
  };
  return (
    <ScrollableView>
      <SafeAreaView>
        <Wrapper>
          <MediumHeader>All Watches</MediumHeader>
          <P>The best watches ever...</P>
          <SearchBox />
          <ItemCartegories>
            <SmallButton
              clicked={btnOneClick}
              onPress={() => btnClickHandler(1)}
            >
              <SmallBtnText clicked={btnOneClick}>All</SmallBtnText>
            </SmallButton>
            <SmallButton
              clicked={btnTwoClick}
              onPress={() => btnClickHandler(2)}
            >
              <SmallBtnText clicked={btnTwoClick}>Popular</SmallBtnText>
            </SmallButton>
            <SmallButton
              clicked={btnThreeClick}
              onPress={() => btnClickHandler(3)}
            >
              <SmallBtnText clicked={btnThreeClick}>Recent</SmallBtnText>
            </SmallButton>
          </ItemCartegories>
          <ItemCarousel />

          <AllItems>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
          </AllItems>
        </Wrapper>
      </SafeAreaView>
    </ScrollableView>
  );
};

export default Home;
