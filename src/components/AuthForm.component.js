import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "./Spacer.component";

export default AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
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
          title={submitButtonText}
          color="blue"
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});
