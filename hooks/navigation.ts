import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../types/RootStackParams";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type RootStackNavigationProps = StackNavigationProp<RootStackParams>;
export type RootRouteNavigationProps = RouteProp<RootStackParams>;

export const useAppNavigation = () => {
  const {
    navigate,
    reset,
    goBack,
    setParams,
    dispatch,
    setOptions,
    isFocused,
    addListener,
    replace,
    push,
    pop,
    popToTop,
  } = useNavigation<RootStackNavigationProps>();

  return {
    navigate,
    reset,
    goBack,
    setParams,
    dispatch,
    setOptions,
    isFocused,
    addListener,
    replace,
    push,
    pop,
    popToTop,
  };
};

export const useAppRoute = () => {
  const route = useRoute<RootRouteNavigationProps>();

  return route;
};
