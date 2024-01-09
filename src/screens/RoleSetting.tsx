import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { useAppNavigation } from "../../hooks/navigation";
import SafeAreaInset from "../components/SafeAreaInset";

import { body, heading } from "../../styles/typography";
import color from "../../styles/color";

import Button from "../components/Button";

import RoleSettingImage from "../../assets/images/role-setting";

const RoleSetting = () => {
  const { setOptions, navigate } = useAppNavigation();

  useEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  const onPress = () => {
    Alert.alert("미구현");
  };

  return (
    <>
      <SafeAreaInset inset={"top"} background="#B9E3F1" />

      <View style={s.container}>
        <View style={{ marginTop: 52, alignItems: "center" }}>
          <RoleSettingImage />
        </View>

        <View style={{ marginTop: 24, alignItems: "center", gap: 4 }}>
          <Text style={[heading("bold").h4, s.text, { color: color.white }]}>
            세상을 보는 또 다른 눈,{"\n"}브로디
          </Text>
          <Text
            style={[body("semiBold").medium, s.text, { color: color.white }]}
          >
            우리의 시야를 조금씩 나누어{"\n"}모두가 더 넓은 세상을 보도록 합니다
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 16, marginTop: 63 }}>
          <Button
            size={"large"}
            type={"primary"}
            label="사진 해설을 받고 싶어요"
            background={color.primary}
            color={color.white}
            onPress={() => navigate("Nickname")}
          />
          <Button
            size={"large"}
            type={"primary"}
            label="해설자로 활동할게요"
            background={color.white}
            color={color.primary}
            onPress={() => onPress()}
          />
        </View>
      </View>

      <SafeAreaInset inset={"bottom"} background="#B9E3F1" />
    </>
  );
};

export default RoleSetting;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E3F1",
  },
  text: {
    textAlign: "center",
  },
});
