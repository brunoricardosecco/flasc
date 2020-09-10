import React from "react";
import Ripple from "react-native-material-ripple";

import styles from "./styles";
import colors from "../../constants/colors";
import { Text } from "react-native";

const InterestsTag = ({ children, onPress, selected }) => {
  return (
    <Ripple
      onPress={onPress && onPress}
      style={[styles.interestsTag, onPress && !selected && {
        backgroundColor: colors.gray
      }]}
    >
      <Text style={styles.interestsText}>{children}</Text>
    </Ripple>
  );
};

export default InterestsTag;
