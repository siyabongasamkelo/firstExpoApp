import { Wrapper } from "./Home.styled";
import { MediumHeader, P } from "../common/Text";
import SearchBox from "../common/SearchBox";
import { SafeAreaView } from "react-native";
import ItemCarousel from "../common/Carousel";
const Home = () => {
  return (
    <SafeAreaView>
      <Wrapper>
        <MediumHeader>All Watches</MediumHeader>
        <P>The best watches ever...</P>
        <SearchBox />
        <ItemCarousel />
      </Wrapper>
    </SafeAreaView>
  );
};

export default Home;
