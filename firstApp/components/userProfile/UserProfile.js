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
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

  const styles = StyleSheet.create({
    icon: {
      marginRight: 10,
    },
  });

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
        <Setting>
          <NameAndIcon>
            <Ionicons
              name="person"
              size={24}
              color="rgba(0,0,0,0.8)"
              style={styles.icon}
            />

            <P>My Profile</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>

        <Setting>
          <NameAndIcon>
            <Ionicons
              name="cube"
              size={24}
              color="rgba(0,0,0,0.8)"
              style={styles.icon}
            />

            <P>My Orders</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>

        <Setting>
          <NameAndIcon>
            <Ionicons
              name="cash"
              size={24}
              color="rgba(0,0,0,0.8)"
              style={styles.icon}
            />

            <P>Refund</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>

        <Setting>
          <NameAndIcon>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="rgba(0,0,0,0.8)"
              style={styles.icon}
            />

            <P>Change Password</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>

        <Setting>
          <NameAndIcon>
            <Ionicons
              name="language-outline"
              size={24}
              color="rgba(0,0,0,0.8)"
              style={styles.icon}
            />

            <P>My Profile</P>
          </NameAndIcon>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="rgba(0,0,0,0.8)"
          />
        </Setting>
      </UserSettings>
    </UserProfileWrapper>
  );
};

export default UserProfile;
