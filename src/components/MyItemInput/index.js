import React, { useCallback } from "react";
import { useField, Formik } from "formik";
import { InputItem } from "@ant-design/react-native";

import { showMessage } from "react-native-flash-message";

const MyTextField = ({
  onChangeText,
  onChange,
  name,
  error,
  touched,
  onFocus,
  onBlur,
  ...props
}) => {
  const handleFocus = onFocus && useCallback(onFocus(name), [name, onFocus]);
  const handleBlur = onBlur && useCallback(onBlur(name), [name, onBlur]);
  const blur = useCallback(() => {
    if (handleBlur) {
      handleBlur({ target: { name } });
    }
  }, [handleBlur]);
  const focus = useCallback(() => {
    if (handleFocus) {
      handleFocus({ target: { name } });
    }
  }, [handleFocus]);
  return (
    <>
      <InputItem
        error={error && touched}
        onErrorClick={() => {
          showMessage({
            message: error,
            type: "danger",
          });
        }}
        name={name}
        onBlur={blur}
        onFocus={focus}
        onChangeText={onChangeText || (onChange && onChange(name))}
        {...props}
      />
    </>
  );
};

export default MyTextField;
