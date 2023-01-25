import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./presentation/navigation/StackNavigator";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favsSlice from "./presentation/redux/FavReducer";

export default function App() {
  const store = configureStore({
    reducer: {
      favs: favsSlice.reducer,
    },
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
