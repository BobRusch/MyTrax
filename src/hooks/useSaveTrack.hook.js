import { useContext } from "react";
import { Context as TrackContext } from "../context/Track.context";
import { Context as LocationContext } from "../context/location.context";
import { navigate } from "../navagationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
