import React from "react";
import { View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

export default function LoadingList({width = "100%"}) {
  return (
    <View
      style={{
        flexDirection: "row",
        // borderRadius: hideRadio ? 0 : metrics.borderRadius,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <SkeletonContent
        containerStyle={{ flex: 1}}
        isLoading
        layout={[
          { key: "text", width, height: 20},
        ]}
      />
    </View>
  );
}
