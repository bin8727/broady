import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AI from "../screens/AI";
import Save from "../screens/Save";
import My from "../screens/My";

import TabBar from "../components/TabBar";
import TabHeader from "../components/TabHeader";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ header: () => <TabHeader /> }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "홈" }}
      />
      <Tab.Screen
        name="AI"
        component={AI}
        options={{ tabBarLabel: "AI해설" }}
      />
      <Tab.Screen
        name="Save"
        component={Save}
        options={{ tabBarLabel: "저장" }}
      />
      <Tab.Screen name="My" component={My} options={{ tabBarLabel: "MY" }} />
    </Tab.Navigator>
  );
};

export default Tabs;
