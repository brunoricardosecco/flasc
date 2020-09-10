import { StyleSheet } from "react-native";
import { colors, metrics } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default styles;