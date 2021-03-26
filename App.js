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
import ResolveAuthScreen from "./src/screens/ResolveAuth.screen";

import { Provider as AuthProvider } from "./src/context/Auth.context";
import { Provider as LocationProvider } from "./src/context/location.context";
import { Provider as TrackProvider } from "./src/context/Track.context";

import { setNavigator } from "./src/navagationRef";

const switchNavigator = createSwitchNavigator({
  Auth: ResolveAuthScreen,
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
      <TrackProvider>
        <LocationProvider>
          <App
            ref={(navigator) => setNavigator(navigator)}
            style={{ backgroundColor: "aquamarine" }}
          />
        </LocationProvider>
      </TrackProvider>
    </AuthProvider>
  );
};
