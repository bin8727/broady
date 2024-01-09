import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { heading } from "./styles/typography";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    black: require("./assets/fonts/Pretendard-Black.ttf"),
    bold: require("./assets/fonts/Pretendard-Bold.ttf"),
    extraBold: require("./assets/fonts/Pretendard-ExtraBold.ttf"),
    extraLight: require("./assets/fonts/Pretendard-ExtraLight.ttf"),
    light: require("./assets/fonts/Pretendard-Light.ttf"),
    medium: require("./assets/fonts/Pretendard-Medium.ttf"),
    regular: require("./assets/fonts/Pretendard-Regular.ttf"),
    semiBold: require("./assets/fonts/Pretendard-SemiBold.ttf"),
    thin: require("./assets/fonts/Pretendard-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;
  return (
    <View>
      <Text style={heading("bold").h1}>안녕하세요 ?</Text>
      <Text style={heading("medium").h1}>안녕하세요 ?</Text>
      <Text style={heading("bold").h1}>안녕하세요 ?</Text>
      <Text style={heading("bold").h1}>안녕하세요 ?</Text>
      <Text style={heading("bold").h1}>안녕하세요 ?</Text>
      <Text style={heading("bold").h1}>안녕하세요 ?</Text>
    </View>
  );
};

export default App;
