import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SectionList,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
// You can import from local files
import AssetExample from '../components/AssetExample';
import DashboardItem from '../components/DashboardItem';
import DashboardItem2 from '../components/DashboardItem2';
import DashboardItem3 from '../components/DashboardItem3';
// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
export default class HomeTab extends React.Component {
 
  state = {
    categories: [
      {
        name: 'Mobiles',
        catImg:
          'https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/phone.png',
      },
      {
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
      {
        name: 'Camera',
        catImg:
          'https://freeiconshop.com/wp-content/uploads/edd/camera-flat.png',
      },
      {
        name: 'Television',
        catImg:
          'https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/television.png',
      },
      {
        name: 'Tablets',
        catImg:
          'https://18n6hx1fu1743e7qmw38fhb8-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/iPad-icon.png',
      },
      {
        name: 'Data Storage',
        catImg:
          'https://www.shareicon.net/data/512x512/2015/10/07/113735_memory-card_512x512.png',
      },
      {
        name: 'Audio',
        catImg:
          'https://cdn3.iconfinder.com/data/icons/ballicons-free/128/speakers.png',
      },
      {
        name: 'Accessories',
        catImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Circle-icons-plugin.svg/768px-Circle-icons-plugin.svg.png',
      },
    ],
    dashboard: [
      {
        type: 2,
        name: 'Mobiles',
        catImg:
          'https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/phone.png',
      },
      {
        type: 0,
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
      {
        type: 1,
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
      {
        type: 0,
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
      {
        type: 2,
        name: 'Mobiles',
        catImg:
          'https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/phone.png',
      },
      {
        type: 0,
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
      {
        type: 1,
        name: 'Laptops',
        catImg:
          'https://cdn1.iconfinder.com/data/icons/business-sets/512/612399-laptop-512.png',
      },
    ],
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            style={styles.flatContainer}
            horizontal={true}
            data={this.state.categories}
            showsHorizontalScrollIndicator={false}
            renderItem={this._renderItem}
            keyExtractor={item => item.catImg}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Card containerStyle={{ padding: 0, margin: 0 }}>
            <View>
              <Image
                style={{ width: '100%', height: 200 }}
                source={{
                  uri:
                    'https://rukminim1.flixcart.com/flap/550/550/image/a97f3c97daf0655f.jpg?q=100',
                }}
                resizeMode="stretch"
              />
            </View>
          </Card>
          <FlatList
            data={this.state.dashboard}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              if (item.type == 2) {
                return <DashboardItem3 />;
              } else if (item.type == 1) {
                return <DashboardItem2 />;
              } else {
                return <DashboardItem />;
              }
            }}
            keyExtractor={(item, index) => item + index}
          />
        </ScrollView>
      </View>
    );
  }

  _renderItem = ({ item }) => (
    <AssetExample name={item.name} image={item.catImg} />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  flatContainer: {
    margin: 8,
  },
});
