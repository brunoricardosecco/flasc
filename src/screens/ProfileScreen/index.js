import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Essa vai ser a Perfil</Text>
      </View>
    </View>
  );
}
