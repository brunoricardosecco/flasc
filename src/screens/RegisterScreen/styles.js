import { StyleSheet, Platform } from "react-native";
import { metrics, colors } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: metrics.basePadding,
    paddingTop: metrics.baseMargin * 2,
  },
  topContainer: {
    alignItems: "center",
    marginVertical: metrics.baseMargin * 2,
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
  button: {
    flex: 1,
    marginBottom: metrics.baseMargin / 2,
    marginHorizontal: metrics.baseMargin,
  },

  linkContainer: {
    paddingHorizontal: metrics.basePadding,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: metrics.baseMargin / 2,
  },
  linkContainerIcon: {
    flexGrow: 1,
    borderColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: metrics.baseMargin / 2,
  },
  icon: {
    marginVertical: metrics.baseMargin,
  },
  iconContainer: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius * 10,
    marginLeft: metrics.baseMargin / 2,
    marginRight: metrics.baseMargin / 5,
    width: hp(7),
    height: hp(7),
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: colors.white,
    fontSize: wp(3.5),
  },
  linkTextWrap: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  button: {},
});
export default styles;
