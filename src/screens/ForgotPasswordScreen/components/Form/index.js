import React, { useCallback, useState } from "react";
import { View, SafeAreaView, Text, AsyncStorage } from "react-native";
import { Button, WhiteSpace, InputItem } from "@ant-design/react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { metrics, colors } from "../../../../constants";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido"),
  // cpf: yup.string().cpf("cpf inválido"),
});

export default function LoginForm() {
  // navigations
  const navigation = useNavigation();

  //state
  const [loading, setLoading] = useState(false);

  //actions
  const dispatch = useDispatch();

  //functions
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", cpf: "", nSubscription: "" },
    mode: "onBlur",
  });
  const submit = async ({ email, cpf, nSubscription }) => {
    try {
      setLoading(true);
      console.log("as");
    } catch (error) {
      showMessage({
        message: "ERROR",
        type: "danger",
        icon: "danger",
        duration: 4500,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <View>
      <Controller
        as={InputItem}
        placeholder="Digite seu email"
        keyboardType="email-address"
        type="email-address"
        onChange={(args) => args[0].nativeEvent.text}
        placeholderTextColor={colors.darkGray}
        name="email"
        last
        control={control}
        style={styles.input}
      />
      <Text style={{ color: "white", paddingLeft: metrics.basePadding }}>
        {errors.email?.message}
      </Text>
      <Button
        // loading={loading}
        type="warning"
        style={styles.button}
        onPress={handleSubmit(submit)}
      >
        Enviar
      </Button>
    </View>
  );
}
