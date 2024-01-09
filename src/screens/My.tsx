import React from "react";
import { View, Text, StyleSheet } from "react-native";

import color from "../../styles/color";
import { heading } from "../../styles/typography";

import Button from "../components/Button";
import { useAppNavigation } from "../../hooks/navigation";

const My = () => {
  const { navigate } = useAppNavigation();
  return (
    <View style={s.container}>
      <View style={{ marginTop: 32, paddingHorizontal: 20 }}>
        <Button
          size={"large"}
          type={"primary"}
          label="첫 화면으로 나가기"
          background={color.primary}
          onPress={() => navigate("Home")}
          textColor={color.white}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={[heading("semiBold").h3, { color: color.gray60 }]}>
          MY
        </Text>
      </View>
    </View>
  );
};

export default My;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
