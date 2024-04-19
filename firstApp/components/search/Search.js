import { UserSearchWrapper } from "./Search.styled";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Button } from "react-native";

const Search = () => {
  const [values, setValues] = useState([0, 10000]);
  const handleChange = (newValues) => setValues(newValues);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const [data, setData] = useState(null);
  const baseUrl = "https://watches-fks5.onrender.com";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/item/get?page=${page}&limit=6&search=${search}&sort=${sort}&category=${category}&minPrice=${values[0]}&maxPrice=${values[1]}`
      );
      setData(response.data.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(data?.items);

  return (
    <UserSearchWrapper>
      {Array.isArray(data) ? (
        data.map((item) => <Text key={item._id}>{item.name}</Text>)
      ) : (
        <Text>Loading...</Text>
      )}
    </UserSearchWrapper>
  );
};

export default Search;
