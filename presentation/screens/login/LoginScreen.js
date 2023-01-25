import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { login as log } from "../../domain/AuthInteractor";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    console.log("");
  }, []);

  const validate = (username, password) => {
    if (username == null || username === "") {
      return false;
    }

    return !(password == null || password === "");
  };

  const login = async (username, password) => {
    if (validate(username, password)) {
      await log(username, password);
      navigation.navigate("Bottom");
    } else {
      ToastAndroid.show("wrong", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={[styles.container]}>
      <TextInput style={[styles.input, { marginBottom: 12 }]} placeholder="Username" onChangeText={(value) => {
        setUsername(value);
      }} />

      <TextInput style={[styles.input, { marginBottom: 48 }]} placeholder="Password" onChangeText={(value) => {
        setPassword(value);
      }} />

      <TouchableOpacity style={[styles.button]} onPress={() => {
        login(username, password);
      }}>
        <Text style={[styles.buttonText]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    padding: 10,
  },
});
export default LoginScreen;
