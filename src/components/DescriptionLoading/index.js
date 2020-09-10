import React from "react";
import { View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
export default function LoadingList() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <SkeletonContent
        containerStyle={{ flex: 1}}
        isLoading
        layout={[
          { key: "text", width: "100%", height: 20, marginBottom: 6 },
          { key: "text2", width: "100%", height: 20, marginBottom: 6 },
          { key: "text3", width: "30%", height: 20, marginBottom: 6 },
        ]}
      />
    </View>
  );
}
