import { StyleSheet } from "react-native";
import { colors, metrics } from "../../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  interestsTag: {
    backgroundColor: colors.green,
    borderColor: colors.green,
    marginRight: metrics.baseMargin / 4,
    marginBottom: metrics.baseMargin / 6,
    borderRadius: metrics.baseRadius / 2
  },
  interestsText: {
    color: colors.white,
    fontFamily: "OpenSans",
    padding: metrics.basePadding / 2,
    fontSize: wp(3.5)
  }
});

export default styles;
