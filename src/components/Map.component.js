import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text, Button } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/location.context";

export default MapComponent = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <>
      <MapView
        style={styles.mapStyle}
        opacity={1}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Circle
          center={currentLocation.coords}
          radius={10}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />

        {locations.length > 1 ? (
          <Polyline
            coordinates={locations.map((loc) => loc.coords)}
            lineCap={"square"}
            strokeColor="rgba(158,158,255,1.0)"
            strokeWidth={4}
          />
        ) : null}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    height: 300,
    width: 350,
    marginHorizontal: 5,
    backgroundColor: "#107B67",
  },
});
