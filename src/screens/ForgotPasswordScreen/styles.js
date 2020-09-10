import { StyleSheet } from "react-native";
import { metrics, colors } from "../../constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: metrics.basePadding,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    color: colors.white,
    fontSize: hp("8%"),
  },
  dataText: {
    color: colors.white,
    fontSize: hp("8%"),
  },
  dataTextBold: {
    color: colors.white,
    fontSize: hp("8%"),
    marginLeft: hp(2),
  },
  subTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: metrics.basePadding
  },
  subTitle: {
    fontSize: hp("2%"),
    textAlign: "center",
    color: colors.white,
  },
  button: {
    flex: 1,
    marginBottom: metrics.baseMargin / 2,
    marginHorizontal: metrics.baseMargin / 2,
  },
});
export default styles;
