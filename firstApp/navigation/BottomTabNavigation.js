import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../components/home/Home";
import Cart from "../components/cart/Cart";
import UserProfile from "../components/userProfile/UserProfile";
// import { View, TouchableOpacity, Text } from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 60,
  },
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "bag" : "bag-outline"}
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
