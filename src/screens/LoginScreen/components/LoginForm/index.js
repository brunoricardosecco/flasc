import React, { useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { InputItem, WhiteSpace } from "@ant-design/react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import { login } from "../../../../store/login/reducer";

import styles from "./styles";
import { colors, metrics } from "../../../../constants";
import ButtonFill from "../../../../components/ButtonFill";

const schema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Código de inscrição é obrigatório"),
});
export default function LoginForm() {
  //reducers
  const { loading } = useSelector((state) => state.login);

  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      // email: "ipesolucoesinteligentes@gmail.com",
      // password: "318576",
    },
    mode: "onBlur",
  });

  //
  //

  const dispatch = useDispatch();
  const loginAsync = useCallback((values) => dispatch(login(values)), [
    dispatch,
  ]);
  const submit = async ({ password, email }) => {
    loginAsync({
      email,
      password,
    });
  };

  return (
    <>
      <Controller
        as={InputItem}
        placeholder="Digite seu email"
        keyboardType="email-address"
        onChange={(args) => args[0].nativeEvent.text}
        style={styles.input}
        placeholderTextColor={colors.darkGray}
        name="email"
        last
        control={control}
      />
      <Text style={{ color: "white", paddingLeft: metrics.basePadding }}>
        {errors.email?.message}
      </Text>
      <WhiteSpace />
      <Controller
        as={InputItem}
        placeholder="Código de inscrição (ex. 100341)"
        onChange={(args) => args[0].nativeEvent.text}
        style={styles.input}
        placeholderTextColor={colors.darkGray}
        last
        secureTextEntry
        keyboardType="numeric"
        name="password"
        type="password"
        control={control}
      />
      <Text style={{ color: "white", paddingLeft: metrics.basePadding }}>
        {errors.password?.message}
      </Text>
      <ButtonFill
        loading={loading}
        children={"ENTRAR"}
        onPress={handleSubmit(submit)}
      />
    </>
  );
}
