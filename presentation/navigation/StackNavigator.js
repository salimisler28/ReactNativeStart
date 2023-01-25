import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bottom from "./BottomTabNavigator";
import PostDetailScreen from "../screens/postdetail/PostDetailScreen";
import LoginScreen from "../screens/login/LoginScreen";

const Stack = createStackNavigator();

const StackNavigator = async () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="Bottom"
        component={Bottom}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
