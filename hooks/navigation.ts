import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../types/RootStackParams";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type RootStackNavigationProps = StackNavigationProp<RootStackParams>;
export type RootRouteNavigationProps = RouteProp<RootStackParams>;

export const useAppNavigation = () => {
  const { navigate, goBack } = useNavigation<RootStackNavigationProps>();

  return { navigate, goBack };
};

export const useAppRoute = () => {
  const route = useRoute<RootRouteNavigationProps>();

  return route;
};
