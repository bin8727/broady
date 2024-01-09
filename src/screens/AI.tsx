import React from "react";
import { View, Text, StyleSheet } from "react-native";

import color from "../../styles/color";
import { heading } from "../../styles/typography";

const AI = () => {
  return (
    <View style={s.container}>
      <Text style={[heading("semiBold").h3, { color: color.gray60 }]}>
        AI 해설
      </Text>
    </View>
  );
};

export default AI;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
