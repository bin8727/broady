import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import SafeAreaInset from "./SafeAreaInset";
import color from "../../styles/color";
import { body } from "../../styles/typography";
import { Notification } from "../../assets/icons";

const TabHeader = () => {
  return (
    <>
      <SafeAreaInset inset={"top"} />
      <View style={s.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://source.unsplash.com/random/50x50" }}
            style={s.profile}
          />
          <View>
            <Text
              style={[
                body("semiBold").large,
                { color: color.gray100, lineHeight: 26 },
              ]}
            >
              반가워요, 유저! 👋🏻
            </Text>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 12,
                color: color.gray60,
                lineHeight: 20,
              }}
            >
              해설자에게 질문해보아요!
            </Text>
          </View>
        </View>

        <TouchableOpacity style={s.notification}>
          <Notification />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TabHeader;

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notification: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
