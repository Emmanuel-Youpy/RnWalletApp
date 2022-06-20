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

const Tab = createBottomTabNavigator();

const Tabss = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
          height: 140,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.Home} label="Home" />
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
              icon={icons.briefcase}
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
              icon={icons.Trade}
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
          tabBarLabel: "Profilr",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} label="Profilr" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabss;
