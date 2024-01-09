import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import color from "../../styles/color";

type SafeAreaInsetType = {
  isHorizontal?: boolean;
  inset: "top" | "bottom" | "left" | "right";
  background?: string;
};

const SafeAreaInset = ({
  isHorizontal = false,
  inset,
  background = color.white,
}: SafeAreaInsetType) => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  if (inset === "top" && !isHorizontal)
    return <View style={{ height: top, backgroundColor: background }} />;

  if (inset === "bottom" && !isHorizontal)
    return <View style={{ height: bottom, backgroundColor: background }} />;

  if (inset === "left" && isHorizontal)
    return <View style={{ height: left, backgroundColor: background }} />;

  if (inset === "right" && isHorizontal)
    return <View style={{ height: right, backgroundColor: background }} />;
};

export default SafeAreaInset;
