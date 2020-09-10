import { StyleSheet } from "react-native";
import { colors, metrics } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
}
  from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  topNav: {
    height: hp(8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.primary,
  },
  titleContainer: {
    textAlign: "center"
  },
  rightContainer: {
    marginRight: 0
  }
});

export default styles;
