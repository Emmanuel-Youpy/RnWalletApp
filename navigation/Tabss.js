import React, { Profiler } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import Trade from "../screens/Trade";
import Market from "../screens/Market";
import Profile from "../screens/Profile";
import Portfolio from "../screens/Portfolio";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, icons } from "../constants";
import TabIcon from "../components/TabIcon";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabss = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        title: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#2e343c",
          height: 120,
          tabBarActiveTintColor: "red",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.portfolio}
              label="Portfolio"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarLabel: "Trade",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.trade}
              isTrade={true}
              label="Trade"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: "Market",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.market} label="Market" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabss;
