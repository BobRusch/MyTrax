import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as LocationContext } from "../context/location.context";

import useSaveTrack from "../hooks/useSaveTrack.hook";

import Spacer from "./Spacer.component";

export default TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  console.log(locations.length);

  return (
    <>
      <Input
        value={name}
        label="Track Name"
        placeholder="put track name here"
        onChangeText={changeName}
      />
      {recording ? (
        <Button
          icon={{
            name: "recording",
            type: "ionicon",
            color: "darkred",
          }}
          title="Stop Recording"
          color="red"
          onPress={stopRecording}
        />
      ) : (
        <Button
          icon={{
            name: "recording-sharp",
            type: "ionicon",
          }}
          title="Record"
          onPress={startRecording}
        />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button
          icon={{
            name: "save",
            type: "fontawesome",
          }}
          title="Save Track Recoding"
          onPress={saveTrack}
        />
      ) : null}
    </>
  );
};
