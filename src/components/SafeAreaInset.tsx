import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import color from "../../styles/color";

type SafeAreaInsetType = {
  isHorizontal?: boolean;
  inset: "top" | "bottom" | "left" | "right";
};

const SafeAreaInset = ({ isHorizontal = false, inset }: SafeAreaInsetType) => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  if (inset === "top" && !isHorizontal)
    return <View style={{ height: top, backgroundColor: color.white }} />;

  if (inset === "bottom" && !isHorizontal)
    return <View style={{ height: bottom, backgroundColor: color.white }} />;

  if (inset === "left" && isHorizontal)
    return <View style={{ height: left, backgroundColor: color.white }} />;

  if (inset === "right" && isHorizontal)
    return <View style={{ height: right, backgroundColor: color.white }} />;
};

export default SafeAreaInset;
