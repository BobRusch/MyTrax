import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/Account.screen";
import SignupScreen from "./src/screens/Signup.screen";
import SigninScreen from "./src/screens/Signin.screen";
import TrackDetailScreen from "./src/screens/TrackDetail.screen";
import TrackListScreen from "./src/screens/TrackList.screen";
import TrackCreateScreen from "./src/screens/TrackCreate.screen";

import { Provider as AuthProvider } from "./src/context/Auth.context";

import { setNavigator } from "./src/navagationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};
