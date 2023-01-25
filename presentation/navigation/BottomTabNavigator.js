import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavsScreen from "../screens/favs/FavsScreen";
import PostListScreen from "../screens/postlist/PostListScreen";

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostListScreen}
        options={{
          headerShown: false,
        }} />
      <Tab.Screen
        name="Favs"
        component={FavsScreen}
        options={{
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}
