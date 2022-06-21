import React, { Profiler } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import Trade from "../screens/Trade";
import Market from "../screens/Market";
import Profile from "../screens/Profile";
import Portfolio from "../screens/Portfolio";
import { COLORS, icons } from "../constants";
import TabIcon from "../components/TabIcon";
import { connect } from "react-redux";
import { setTradeModalVisibility } from "../stores/tab/tabAction";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const Tabss = ({ setTradeModalVisibility, isTradeModalVisible }) => {
  function tradeTabButtonOnclickHandler() {
    setTradeModalVisibility(!isTradeModalVisible);
  }
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
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label="Home" />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.portfolio}
                  label="Portfolio"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
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
              icon={isTradeModalVisible ? icons.close : icons.trade}
              iconStyle={
                isTradeModalVisible
                  ? {
                      width: 15,
                      height: 15,
                    }
                  : null
              }
              isTrade={true}
              label="Trade"
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
              onPress={() => tradeTabButtonOnclickHandler()}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: "Market",
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.market} label="Market" />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

// export default Tabss;

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setTradeModalVisibility: (isVisible) => {
      return dispatch(setTradeModalVisibility(isVisible));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabss);
