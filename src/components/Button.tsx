import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { body } from "../../styles/typography";

type ButtonType = {
  size: "small" | "normal" | "large";
  type: "primary" | "secondary" | "disabled" | "state";
  background?: string;
  color?: string;
  label: string;
  onPress?: () => void;
};

const Button = ({
  size,
  type,
  background,
  color,
  label,
  onPress,
}: ButtonType) => {
  let buttonSize;
  let buttonType;

  switch (size) {
    case "small":
      buttonSize = s.small;
      break;
    case "normal":
      buttonSize = s.normal;
      break;
    case "large":
      buttonSize = s.large;
      break;
  }

  switch (type) {
    case "primary":
      buttonType = s.primary;
      break;
    case "secondary":
      buttonType = s.secondary;
      break;
    case "disabled":
      buttonType = s.disabled;
      break;
    case "state":
      buttonType = s.state;
      break;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        s.container,
        buttonSize,
        buttonType,
        { backgroundColor: background },
      ]}
    >
      <Text style={[body("medium").large, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  normal: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  primary: {
    borderRadius: 12,
  },
  secondary: {
    borderRadius: 12,
    borderWidth: 1,
  },
  disabled: {
    borderRadius: 24,
  },
  state: {
    borderRadius: 24,
  },
});
