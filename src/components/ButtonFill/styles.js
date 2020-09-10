import { StyleSheet } from "react-native";
import { metrics, colors } from "../../constants";

const styles = StyleSheet.create({
  button: {
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin / 2,
    padding: metrics.basePadding,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonText: {
    textAlign: "center",
    color: colors.white
  },
  loading: {
    marginHorizontal: metrics.basePadding / 2
  }
});
export default styles;