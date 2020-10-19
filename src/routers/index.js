import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from '../components';
import {
  Activity,
  Home,
  Login,
  Profile,
  Register,
  Search,
  Setting,
  SettingList,
  Splash,
} from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="CreatePost" options={()=>n} /> */}
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="SettingList" component={SettingList} />
    </Stack.Navigator>
  );
};

export default Router;
