import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./styles";
import { colors, metrics } from "../../constants";

export default function ButtonFill({ children, loading = false, color, onPress }) {
  return (
    <View >
      <TouchableOpacity
        loading={loading}
        style={[styles.button, color ? { backgroundColor: color } : { backgroundColor: colors.secundary }]}
        onPress={onPress}
      >
        {loading && <ActivityIndicator style={styles.loading} size="small" color={colors.white} />}
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}