import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/Auth.context";

import Spacer from "../components/Spacer.component";

export default SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Trax</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        secureTextEntry={true}
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          icon={{
            name: "login",
            type: "antdesign",
            size: 25,
            color: "black",
          }}
          raised={true}
          type="outline"
          title="Signup"
          color="blue"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      <Spacer>
        <Text>If have already signed up, please go to Sign In</Text>
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});
