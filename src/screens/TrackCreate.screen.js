// import "../_mockLocations";
import React, { useContext, useCallback } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";

import Spacer from "../components/Spacer.component";
import MapComponent from "../components/Map.component";
import TrackForm from "../components/TrackForm.component";

import useLocation from "../hooks/useLocation.hook";

import { Context as LocationContext } from "../context/location.context";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Spacer>
        <Text h3>Create a Track</Text>
      </Spacer>
      <MapComponent />
      {err ? <Text>Please enable location services</Text> : null}

      <View style={styles.buttonContainer}>
        <TrackForm />
      </View>
    </SafeAreaView>
  );
};
export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    padding: 0,
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 15,
  },
});
