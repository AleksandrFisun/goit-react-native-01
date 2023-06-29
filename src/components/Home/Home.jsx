import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut';
import ButtonBack from '../ButtonBack/ButtonBack';

import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import PostsScreen from '../PostScreen/PostsScreen';
import { styles } from './HomeStyles';

const Tab = createBottomTabNavigator();

const Home = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: ({ accessibilityState, onPress }) => {
          const isActive = accessibilityState?.selected;
          const buttonStyle = isActive
            ? styles.activeTabButton
            : styles.tabButton;

          return (
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
              <Icon
                name={getIconName(route.name)}
                size={24}
                color={isActive ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)'}
              />
            </TouchableOpacity>
          );
        },
        tabBarStyle: {
          paddingBottom: 34,
          paddingTop: 9,
          height: 83,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, 0.3)',
          backgroundColor: '#FFFFFF',
        },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerStyle: styles.wrapperPostHeader,
          headerTitleStyle: styles.titlePostHeader,
          headerRight: () => <ButtonLogOut />,
          headerLeft: () => null,
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerStyle: styles.wrapperPostHeader,
          headerTitleStyle: styles.titlePostHeader,
          headerLeft: () => <ButtonBack />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const getIconName = routeName => {
  switch (routeName) {
    case 'Posts':
      return 'appstore-o';
    case 'CreatePosts':
      return 'plus';
    case 'Profile':
      return 'user';
    default:
      return '';
  }
};

export default Home;
