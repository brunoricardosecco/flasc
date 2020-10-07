import { StyleSheet } from "react-native";
import { colors, metrics } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: wp(90),
    height: wp(90),
  },
  text: {
    fontSize: wp(9),
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
