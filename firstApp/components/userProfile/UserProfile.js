import { GoBack } from "../cart/Cart.styled";
import { ButtonText } from "../common/Buttons";
import {
  CoverPhoto,
  Darkener,
  NameAndIcon,
  ProfileHeader,
  ProfileHeaderText,
  ProfilePic,
  Setting,
  SmallText,
  UserDetails,
  UserName,
  UserProfileWrapper,
  UserSettings,
} from "./UserProfile.styled";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { P } from "../common/Text";

const UserProfile = () => {
  const navigation = useNavigation();

  const handlePreviousScreen = () => {
    navigation.goBack();
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <UserProfileWrapper>
      <CoverPhoto source={require("../../assets/img/coverphoto.jpg")}>
        <ProfileHeader>
          <Darkener>
            <GoBack onPress={handlePreviousScreen}>
              <ButtonText>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  color="rgba(255,255,255,0.8)"
                />
              </ButtonText>
            </GoBack>
          </Darkener>
          <ProfileHeaderText>User Profile</ProfileHeaderText>
          <Darkener>
            <Ionicons
              name="ellipsis-vertical-outline"
              size={24}
              color="rgba(255,255,255,0.8)"
            />
          </Darkener>
        </ProfileHeader>
      </CoverPhoto>
      <ProfilePic source={require("../../assets/img/profile.jpg")}></ProfilePic>
      <UserDetails>
        <UserName>Siyabonga Mazibuko</UserName>
        <SmallText>Siyabonga@gmail.com</SmallText>
      </UserDetails>
      <UserSettings>
        {/* <View>

          <TouchableOpacity onPress={toggleAccordion}>
            <SmallText style={{ fontSize: 18, fontWeight: "bold" }}>
              Click to toggle
            </SmallText>
          </TouchableOpacity>
          {isExpanded && (
            <View
              style={{ padding: 10, backgroundColor: "#f0f0f0", marginTop: 10 }}
            >
              <SmallText>This is the content of the accordion</SmallText>
            </View>
          )}
        </View> */}

        <Setting>
          <NameAndIcon>
            <Ionicons name="person" size={24} color="rgba(0,0,0,0.8)" />

            <P>Basic Information</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>
        <View
          style={{ padding: 10, backgroundColor: "#f0f0f0", marginTop: 10 }}
        >
          <SmallText>This is the content of the accordion</SmallText>
        </View>
      </UserSettings>
    </UserProfileWrapper>
  );
};

export default UserProfile;
