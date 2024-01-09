import { StyleSheet } from "react-native";

type TypographyType = "bold" | "semiBold" | "medium";

const heading = (fontFamily: TypographyType) => {
  return StyleSheet.create({
    h1: {
      fontFamily: fontFamily,
      fontSize: 48,
    },
    h2: {
      fontFamily: fontFamily,
      fontSize: 40,
    },
    h3: {
      fontFamily: fontFamily,
      fontSize: 32,
    },
    h4: {
      fontFamily: fontFamily,
      fontSize: 24,
    },
    h5: {
      fontFamily: fontFamily,
      fontSize: 20,
    },
    h6: {
      fontFamily: fontFamily,
      fontSize: 18,
    },
  });
};

const body = (fontFamily: TypographyType) => {
  return StyleSheet.create({
    xLarge: {
      fontFamily: fontFamily,
      fontSize: 18,
    },
    large: {
      fontFamily: fontFamily,
      fontSize: 16,
    },
    medium: {
      fontFamily: fontFamily,
      fontSize: 14,
    },
    small: {
      fontFamily: fontFamily,
      fontSize: 12,
    },
    xSmall: {
      fontFamily: fontFamily,
      fontSize: 10,
    },
  });
};

export { heading, body };
