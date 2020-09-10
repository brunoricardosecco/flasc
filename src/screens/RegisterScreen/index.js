import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RegisterForm from "./components/RegisterForm";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <RegisterForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
