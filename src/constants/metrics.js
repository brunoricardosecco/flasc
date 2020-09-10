import { Dimensions, Platform, StatusBar } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default {
  basePadding: widthPercentageToDP(2) + heightPercentageToDP(2) / 2,
  baseMargin: widthPercentageToDP(5) + heightPercentageToDP(5) / 2,
  baseRadius: 5,

  marginTop: Platform.OS === "ios" ? 34 : (StatusBar.currentHeight || 0) + 10,
};
