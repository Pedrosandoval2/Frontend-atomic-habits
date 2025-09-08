import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "./CustomTabBar";
import Habits from "../pages/habits/Habits";
import Calendar from "../pages/calendar/Calendar";

const Tab = createBottomTabNavigator();

export function MainTabs() {
    return (
        <Tab.Navigator
            // this is config to use a custom tab bar view
            tabBar={props => <CustomTabBar {...props} />}
            // This hides the header for all screens in the navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Hábitos"
                component={Habits}
            />
            <Tab.Screen
                name="Calendario"
                component={Calendar}
            />
            <Tab.Screen
                name="Perfil"
                component={Calendar}
            />
        </Tab.Navigator>
    );
}