import AsyncStorage from "@react-native-async-storage/async-storage";

let key_token = "key_token";

export const set = async (token) => {
  try {
    await AsyncStorage.setItem(key_token, token);
    console.log(token + " saved");
  } catch (e) {
    console.log(e);
  }
};

export const read = async () => {
  return await AsyncStorage.getItem(key_token);
};

export const clear = async () => {
  return await AsyncStorage.removeItem(key_token);
};
