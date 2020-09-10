import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  AsyncStorage,
  ScrollView,
} from "react-native";

import styles from "./styles";
import { colors, metrics } from "../../constants";
import Form from "./components/Form";

export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Informe pelo menos um dos campos abaixo
          </Text>
        </View>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
}
