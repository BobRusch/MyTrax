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
import { ThemeProvider } from "react-native-elements";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { theme } from "./src/themes/app.theme";

import { Provider as AuthProvider } from "./src/context/Auth.context";
import { Provider as LocationProvider } from "./src/context/location.context";
import { Provider as TrackProvider } from "./src/context/Track.context";

import { setNavigator } from "./src/navagationRef";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator(
      {
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
      },
      {
        navigationOptions: {
          title: "Tracks",
          tabBarIcon: <FontAwesome name="th-list" size={20} />,
        },
      }
    ),
    TrackCreate: {
      screen: TrackCreateScreen,
      navigationOptions: {
        title: "Add Track",
        tabBarIcon: <FontAwesome name="plus" size={20} />,
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Account",
        tabBarIcon: <Ionicons name="settings" size={20} />,
      },
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <TrackProvider>
          <LocationProvider>
            <App
              ref={(navigator) => setNavigator(navigator)}
              style={{ backgroundColor: "aquamarine" }}
            />
          </LocationProvider>
        </TrackProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
