import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";
import RoleSetting from "../screens/RoleSetting";
import Nickname from "../screens/Nickname";
import Chat from "../screens/Chat";

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="RoleSetting" component={RoleSetting} />
          <Stack.Screen name="Nickname" component={Nickname} />
        </Stack.Group>

        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
