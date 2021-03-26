import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/Auth.context";

import Spacer from "../components/Spacer.component";

export default AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Spacer>
        <Text h3>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button
          icon={{
            name: "logout",
            type: "antdesign",
            size: 25,
            color: "black",
          }}
          raised={true}
          type="outline"
          title="Sign Out"
          color="blue"
          onPress={() => signout()}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "center",
  },
});
