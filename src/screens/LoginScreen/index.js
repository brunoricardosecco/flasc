import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from "react-native";
import LoginForm from "./components/LoginForm";
import styles from "./styles";
import Ticket from "../../components/svgs/Ticket";
import { ScrollView } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  // navigations
  const goToForgot = () => navigation.navigate("ForgotPassword");
  const goToRegister = () => navigation.navigate("Register");
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <LoginForm />
            <View style={styles.linkContainer}>
              <View style={[styles.button]} onTouchEnd={goToForgot}>
                <View style={styles.linkTextWrap}>
                  <Text style={styles.linkText}>Esqueci Minha Senha</Text>
                </View>
              </View>
              <View style={[styles.button]} onTouchEnd={goToRegister}>
                <View style={styles.linkTextWrap}>
                  <Text style={styles.linkText}>
                    Clique aqui para cadastrar
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
