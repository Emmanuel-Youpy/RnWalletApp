import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../constants";

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: COLORS.black,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{ color: "white", ...FONTS.h4 }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.white : "gray",
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : "gray",
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
