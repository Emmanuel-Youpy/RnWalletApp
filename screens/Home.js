import React from "react";
import { View, Text } from "react-native";
import MainLayout from "./MainLayout";
import { connect } from "react-redux";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";

const Home = () => {
  return (
    <MainLayout>
      <View>
        <Text>Home</Text>
      </View>
    </MainLayout>
  );
};

// function mapStateToProps(state) {
//   return {
//     myHoldings: state.marketReducer.myHoldings,
//     coins: state.marketReducer.coins,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     setTradeModalVisibility: (isVisible) => {
//       return dispatch(setTradeModalVisibility(isVisible));
//     },
//   };
// }

export default connect(Home);
