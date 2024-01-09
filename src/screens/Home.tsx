import React from "react";
import { View, Text, StyleSheet } from "react-native";

import color from "../../styles/color";
import { heading } from "../../styles/typography";

import Button from "../components/Button";

const Home = () => {
  return (
    <View style={s.container}>
      <View style={{ marginTop: 32, paddingHorizontal: 20 }}>
        <Button
          size={"large"}
          type={"primary"}
          label="채팅방 입장"
          background={color.primary}
          textColor={color.white}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={[heading("semiBold").h3, { color: color.gray60 }]}>
          홈 화면
        </Text>
      </View>
    </View>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
