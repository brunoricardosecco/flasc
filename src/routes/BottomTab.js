import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/ProfileScreen";

export default function BottomTab() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
