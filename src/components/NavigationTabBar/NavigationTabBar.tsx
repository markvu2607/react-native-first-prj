import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackgroundTabBarSVG from './components/BackgroundTabBarSVG';
import MicrophoneSVG from './components/MicrophoneSVG';
import HomeSVG from './components/HomeSVG';

import HomeScreen from '../../screens/HomeScreen';
import UpdateSVG from './components/UpdateSVG';
import NotificationSVG from './components/NotifitcationSVG';
import AccountSVG from './components/AccountSVG';

const Tab = createBottomTabNavigator();

function UpdateScreen() {
  return (
    <View style={styles.container}>
      <Text>Update Screen</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
    </View>
  );
}

function NavigationTabs() {
  function CustomButton() {
    return (
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#334A86',
          borderRadius: 1000,
          bottom: 36,
        }}>
        <View
          style={{
            width: 22,
            height: 22,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{translateY: -11}, {translateX: -11}],
          }}>
          <MicrophoneSVG fill="white" width="100%" height="100%" />
        </View>
      </TouchableOpacity>
    );
  }

  function EmptyScreen() {
    return <View />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          position: 'relative',
          top: -32,
          elevation: 0,
        },
        tabBarActiveTintColor: '#334A86',
        tabBarInactiveTintColor: '#8F9BB3',
      }}
      tabBar={props => (
        <React.Fragment>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '18%',
              // backgroundColor: 'rgba(0,0,0,0.05)',
              // shadowOffset: {
              //   height: 4,
              //   width: 4,
              // },
              // shadowColor: 'red',
              // backgroundColor: '#d9d9d9',
              // shadowColor: '#000000',
              // shadowOpacity: 0.8,
              // shadowRadius: 2,
              // shadowOffset: {
              //   height: 1,
              //   width: 1,
              // },
            }}>
            <BackgroundTabBarSVG width="100%" height="100%" fill="white" />
          </View>
          <BottomTabBar {...props} />
        </React.Fragment>
      )}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: props => (
            <View style={{width: 16, height: 16}}>
              <HomeSVG width="100%" height="100%" fill={props.color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={UpdateScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Update',
          tabBarIcon: props => (
            <View style={{width: 16, height: 16}}>
              <UpdateSVG width="100%" height="100%" fill={props.color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Empty"
        component={EmptyScreen}
        options={{
          tabBarButton: () => <CustomButton />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            left: 0,
            top: 0,
            minWidth: 0,
            minHeight: 0,
            height: 13,
            fontSize: 8,
            lineHeight: 12,
          },
          tabBarIcon: props => (
            <View style={{width: 16, height: 16}}>
              <NotificationSVG width="100%" height="100%" fill={props.color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: props => (
            <View style={{width: 16, height: 16}}>
              <AccountSVG width="100%" height="100%" fill={props.color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NavigationTabs;
