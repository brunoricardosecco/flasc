import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";

import styles from "./styles";
import ArrowBack from "../svgs/ArrowBack";
import { metrics } from "../../constants";

const TopNav = ({ right, left, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topNav}>
      {left ? (
        left()
      ) : (
        <Ripple
          style={{ paddingRight: 20, paddingVertical: 5 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowBack />
        </Ripple>
      )}
      <View style={styles.rightContainer}>{right ? right() : null}</View>

      {title && (
        <View style={styles.titleContainer}>{title ? title() : null}</View>
      )}
    </View>
  );
};

export default TopNav;
