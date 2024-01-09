import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SafeAreaInset from "./SafeAreaInset";
import {
  Home,
  HomeFill,
  Paper,
  PaperFill,
  Bookmark,
  BookmarkFill,
  Profile,
  ProfileFill,
} from "../../assets/icons";
import { body } from "../../styles/typography";
import color from "../../styles/color";

const Icons = [
  { Home: Home },
  { HomeFill: HomeFill },
  { Paper: Paper },
  { PaperFill: PaperFill },
  { Bookmark: Bookmark },
  { BookmarkFill: BookmarkFill },
  { Profile: Profile },
  { ProfileFill: ProfileFill },
];

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <>
      <View style={s.container}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={s.btn}
            >
              {index === 0 && (isFocused ? <HomeFill /> : <Home />)}
              {index === 1 && (isFocused ? <PaperFill /> : <Paper />)}
              {index === 2 && (isFocused ? <BookmarkFill /> : <Bookmark />)}
              {index === 3 && (isFocused ? <ProfileFill /> : <Profile />)}
              <Text
                style={[
                  body("medium").xSmall,
                  s.text,
                  { color: isFocused ? color.primary : color.gray60 },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <SafeAreaInset inset={"bottom"} />
    </>
  );
};

export default TabBar;

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 43,
    paddingTop: 16,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: color.background,
    backgroundColor: color.white,
  },
  btn: {
    alignItems: "center",
    width: 48,
    height: 48,
  },
  text: {
    width: 48,
    height: 20,
    lineHeight: 20,
    textAlign: "center",
  },
});
