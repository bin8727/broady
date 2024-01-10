import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useAppNavigation } from "../../hooks/navigation";
import SafeAreaInset from "../components/SafeAreaInset";

import AsyncStorage from "@react-native-async-storage/async-storage";

import color from "../../styles/color";
import { body, heading } from "../../styles/typography";

import { ArrowLeft } from "../../assets/icons";

import Button from "../components/Button";
import useTextInputFocus from "../../hooks/useTextInputFocus";

const Header = () => {
  const { goBack } = useAppNavigation();

  const s = StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      backgroundColor: color.white,
    },
    btn: {
      width: 48,
      height: 48,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <>
      <SafeAreaInset inset={"top"} />
      <View style={s.container}>
        <TouchableOpacity style={s.btn} onPress={() => goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
      </View>
    </>
  );
};

const Nickname = () => {
  const { setOptions, reset } = useAppNavigation();
  const [nickname, setNickname] = useState<string>("");
  const { hasFocus, onBlur, onFocus } = useTextInputFocus();

  useEffect(() => {
    setOptions({
      header: () => <Header />,
    });
  }, []);

  const setItem = async (value: string) => {
    try {
      await AsyncStorage.setItem("nickname", value);
    } catch (e) {
      throw e;
    }
  };

  const startService = () => {
    if (nickname.length > 0) {
      reset({ routes: [{ name: "Tabs" }] });
      setItem(nickname);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={s.container}>
          <View style={{ marginTop: 32, gap: 32 }}>
            <View style={{ alignItems: "center", gap: 12 }}>
              <Text style={[heading("bold").h4, { color: color.gray100 }]}>
                닉네임 정하기
              </Text>
              <Text style={[body("semiBold").medium, { color: color.gray100 }]}>
                사용하실 닉네임을 입력해주세요
              </Text>
            </View>

            <View
              style={[
                s.inputField,
                hasFocus && {
                  borderColor: color.primary,
                },
              ]}
            >
              <TextInput
                placeholder="닉네임 입력하기"
                placeholderTextColor={color.gray60}
                style={[body("medium").medium, { color: color.gray100 }]}
                value={nickname}
                onChangeText={(text) => setNickname(text)}
                onFocus={onFocus}
                onBlur={onBlur}
                cursorColor={color.primary}
              />
            </View>

            <Button
              size="large"
              type="state"
              label="브로디 시작하기"
              color={nickname.length > 0 ? color.white : color.gray60}
              background={nickname.length > 0 ? color.primary : color.gray20}
              onPress={() => startService()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <SafeAreaInset inset={"bottom"} />
    </>
  );
};

export default Nickname;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 24,
  },
  inputField: {
    borderRadius: 24,
    backgroundColor: color.background,
    paddingHorizontal: 16,
    height: 52,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: color.background,
  },
});
