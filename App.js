import React, { Component } from 'react';
import {View,StatusBar} from 'react-native';
import HomeTab from './src/tabs/HomeTab';
import WishListTab from './src/tabs/WishListTab';
import GiftRegistryTab from './src/tabs/GiftRegistryTab';
import CartTab from './src/tabs/CartTab';
import ProductList from './src/screens/ProductList'
import ProductDetail from './src/screens/ProductDetail'

import { Provider } from 'react-redux';

import { Icon } from 'native-base';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs'; 
import { createStackNavigator } from 'react-navigation';
import configureStore from './src/store/configureStore'
class App extends Component {
  render() {
    store = configureStore();
    return ( 
      <Provider store={store}>
        <MaterialBottomTabNavigator />
    </Provider>
  );
  }
}
export default App;
const HomeStack = createStackNavigator({
  Home: HomeTab,
  Products: ProductList,
  productDetail:ProductDetail,
});
const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Whishlist: { screen: WishListTab },
    GiftRegistry: { screen: GiftRegistryTab },
    Cart: { screen: CartTab },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Whishlist') {
          iconName = `heart${focused ? '' : '-outline'}`;
        }else if (routeName === 'GiftRegistry') {
          iconName = `bookmark${focused ? '' : '-outline'}`;
        }else if (routeName === 'Cart') {
          iconName = `cart${focused ? '' : '-outline'}`;
        }

         return <Icon
          style={{ color: tintColor, fontSize: 25 }}
          name={iconName}
          type="MaterialCommunityIcons"/>;
      },
    }),
    initialRouteName: 'Home',
    activeTintColor: '#324191',
    inactiveTintColor: '#80868B',
    barStyle: { backgroundColor: '#FFF' },
  }
);