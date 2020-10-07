import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { logout } from "../../store/login/reducer";

import ButtonFill from "../../components/ButtonFill";
import { colors } from "../../constants";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
  // * actions
  const dispatch = useDispatch();
  const logoutAsync = useCallback(() => dispatch(logout()));

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Essa vai ser a HomePage</Text>
      </View>
      <View style={{ width: wp(90) }}>
        <ButtonFill color={colors.green} onPress={() => logoutAsync()}>
          Sair do aplicativo
        </ButtonFill>
      </View>
    </View>
  );
}
