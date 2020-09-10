import React from "react";
import { View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import metrics from "../../constants/metrics";

export default function LoadingList() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        // borderRadius: hideRadio ? 0 : metrics.borderRadius,
        alignItems: "center",
        backgroundColor: "white",
        padding: metrics.basePadding,
        minHeight: 90,
      }}
    >
      <SkeletonContent
        containerStyle={{ flex: 1 }}
        isLoading
        layout={[{ key: "image", width: 50, height: 50, borderRadius: 30}]}
      />
      <SkeletonContent
        containerStyle={{ flex: 4}}
        isLoading
        layout={[
          { key: "text", width: "80%", height: 30, marginBottom: 6 },
          { key: "text2", width: "90%", height: 20, marginBottom: 6 },
          { key: "text3", width: "30%", height: 20, marginBottom: 6 },
        ]}
      />
    </View>
  );
}
