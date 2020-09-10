import { StyleSheet, Platform } from "react-native";
import { metrics, colors } from "../../../../constants";

const styles = StyleSheet.create({
  formContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    flex: 1,
    borderBottomColor: colors.darkGray,
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    color: colors.white,
  },
  button: {
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin / 2,
    backgroundColor: colors.secundary,
    borderColor: colors.secundary,
    borderRadius: 0,
  },
});
export default styles;
