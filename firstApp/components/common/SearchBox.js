import {
  Icon,
  Input,
  SearchBoxWrapper,
  SearchFilter,
} from "./SearchBox.styled";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Icon>
        <Ionicons
          name={"search-outline"}
          size={24}
          color={"rgba(255,255,255, 0.7)"}
        />
      </Icon>
      <Input
        placeholder={"Search Watches"}
        placeholderTextColor=" rgba(255, 255, 255, 0.7)"
      />
      <SearchFilter>
        <Ionicons
          name={"options-outline"}
          size={24}
          color={"rgba(255,255,255, 0.7)"}
        />
      </SearchFilter>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
