import React, { useContext } from "react";
import HomeScreen from "../screens/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
