import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from "./src/mainTabs/HomeTab"
import WishListTab from "./src/mainTabs/WishListTab"
import GiftListTab from "./src/mainTabs/GiftListTab"
import CartTab from "./src/mainTabs/CartTab"

import configureStore from "./src/store/store"
import { Provider } from "react-redux";
// Register Screens
Navigation.registerComponent(
  "retailer.HomeScreen",
  () => HomeTab);

Navigation.registerComponent("retailer.WishListScreen", () => WishListTab);
Navigation.registerComponent("retailer.GiftListScreen", () => GiftListTab);
Navigation.registerComponent("retailer.CartScreen", () => CartTab);

// Start a App
/* Navigation.startSingleScreenApp({
  screen: {
    screen: "retailer.MainScreen",
    title: "Home",
  },
}); */
Promise.all([
  Icon.getImageSource("md-home", 30),
  Icon.getImageSource("ios-heart", 30),
  Icon.getImageSource("ios-bookmark", 30),
  Icon.getImageSource("ios-cart", 30)

]).then(sources => {
  Navigation.startTabBasedApp({
      tabs: [
          {
              screen: "retailer.HomeScreen",
              label: "Home",
              title: "Home",
              icon: sources[0]
          },
          {
              screen: "retailer.WishListScreen",
              label: "WishList",
              title: "Wish List",
              icon: sources[1]
          },
          {
              screen: "retailer.GiftListScreen",
              label: "Gift List",
              title: "Gift List",
              icon: sources[2]
          },
          {
              screen: "retailer.CartScreen",
              label: "Cart",
              title: "Cart",
              icon: sources[3]
          }
      ],
      tabsStyle: {
        tabBarBackgroundColor: '#F5F5F5',
        tabBarButtonColor: '#80868B',
        tabBarSelectedButtonColor: '#3B78E7',
      },
      appStyle: {
        tabBarBackgroundColor: '#F5F5F5',
        navBarButtonColor: '#80868B',
        tabBarButtonColor: '#80868B',
        navBarTextColor: '#000',
        tabBarSelectedButtonColor: '#3B78E7',
        navigationBarColor: '#F5F5F5',
        navBarBackgroundColor: '#F5F5F5',
        statusBarColor: '#F5F5F5',
        statusBarTextColorScheme: 'dark',
        forceTitlesDisplay: true,
       
      },
  });
});
