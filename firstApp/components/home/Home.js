import {
  AllItems,
  HomeHeader,
  ItemCartegories,
  ScrollableView,
  SmallBtnText,
  SmallButton,
  Wrapper,
} from "./Home.styled";
import { MediumHeader } from "../common/Text";
import SearchBox from "../common/SearchBox";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import ItemCard from "../common/ItemCard";
import { Ionicons } from "@expo/vector-icons";

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
          <HomeHeader>
            <Ionicons name="menu-outline" size={24} color="rgba(0,0,0,0.7)" />

            <Ionicons
              name="notifications-outline"
              size={24}
              color="rgba(0,0,0,0.7)"
            />
          </HomeHeader>
          <MediumHeader>Luxurious Watches</MediumHeader>
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
              <SmallBtnText clicked={btnTwoClick}>Classic</SmallBtnText>
            </SmallButton>
            <SmallButton
              clicked={btnThreeClick}
              onPress={() => btnClickHandler(3)}
            >
              <SmallBtnText clicked={btnThreeClick}>Advanced</SmallBtnText>
            </SmallButton>
          </ItemCartegories>

          <AllItems>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
          </AllItems>
        </Wrapper>
      </SafeAreaView>
    </ScrollableView>
  );
};

export default Home;
