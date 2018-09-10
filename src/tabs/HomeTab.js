import React, { Component } from 'react';
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
  Item,
  Button,
  Input,
  Badge,
} from 'native-base';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
// You can import from local files
import CategoriesListItem from '../components/CategoriesListItem';
import DashboardItem from '../components/DashboardItem';
import DashboardItem2 from '../components/DashboardItem2';
import DashboardItem3 from '../components/DashboardItem3';
import { Card } from 'react-native-elements';
import categoriesJson from '../api/categories.json';
import dashboardJson from '../api/dashboard.json';
import { connect } from 'react-redux';

class HomeTab extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ backgroundColor: '#f5f5f5' }}>
          <Header style={{ backgroundColor: '#fff' }}>
            <StatusBar
              backgroundColor="white"
              barStyle="dark-content"
            />
            <Left style={{ flex: 1 }}>
              <Icon
                name="ios-search"
                type="Ionicons"
                style={{ color: '#000', paddingLeft: 12 }}
              />
            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Home
              </Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button
                transparent
                style={{ paddingRight: 35 }}
                onPress={() => this.props.navigation.navigate('Cart')}>
                <Icon
                  name="cart-outline"
                  type="MaterialCommunityIcons"
                  style={{ color: '#000', position: 'absolute' }}
                />
                <Badge
                  danger
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 3,
                    height: 18,
                  }}>
                  <Text style={{ fontSize: 12, color: '#fff' }}>{this.props.count}</Text>
                </Badge>
              </Button>
            </Right>
          </Header>
          <View style={styles.container}>
            <FlatList
              style={styles.flatContainer}
              horizontal={true}
              data={categoriesJson}
              showsHorizontalScrollIndicator={false}
              renderItem={this._renderItem}
              keyExtractor={item => item.catImg}
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Card containerStyle={{ padding: 0, margin: 0 }}>
              <View>
                <Image
                  style={{ width: '100%', height: 180 }}
                  source={{
                    uri:
                      'https://rukminim1.flixcart.com/flap/550/550/image/a97f3c97daf0655f.jpg?q=100',
                  }}
                  resizeMode="stretch"
                />
              </View>
            </Card>

            <FlatList
              data={dashboardJson}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                if (item.type == 2) {
                  return (
                    <DashboardItem3
                      navigation={this.props.navigation}
                      title="Mobiles"
                    />
                  );
                } else if (item.type == 1) {
                  return (
                    <DashboardItem2
                      navigation={this.props.navigation}
                      title="Cameras"
                    />
                  );
                } else {
                  return (
                    <DashboardItem
                      navigation={this.props.navigation}
                      title="Laptops"
                    />
                  );
                }
              }}
              keyExtractor={(item, index) => item + index}
            />
          </ScrollView>
        </Container>
      </View>
    );
  }

  _renderItem = ({ item }) => (
    <CategoriesListItem
      name={item.name}
      image={item.catImg}
      navigation={this.props.navigation}
    />
  );
}


const mapStateToProps = state => {
  return {
    count: state.addToCart.count
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  flatContainer: {
    marginTop: 4,
    marginBottom: 4,
  },
});
export default connect(mapStateToProps)(HomeTab);
