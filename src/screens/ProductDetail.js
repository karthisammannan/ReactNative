import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import {addToCart} from '../actions/index';

class ProductDetail extends Component {
  
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#FFFF',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { params } = this.props.navigation.state;
    const image = params ? params.image : null;
    return (
      <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{
                uri: image,
              }}
              resizeMode="contain"
            />
          </View>
          <Card containerStyle={{ padding: 0, margin: 0,marginBottom:45 }}>
            <View style={{ padding: 14 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                {params.title}
              </Text>
              <View style={{ marginTop: 8,alignItems:'flex-start',justifyContent:'flex-start'}}>
                <Text style={styles.SubmitButtonStyle}>
                  <Text style={styles.TextStyle}>4.5 </Text>
                </Text>
              </View>
              <Text
                style={{
                  flexWrap: 'wrap',
                  marginTop: 12,
                }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  ₹ 43545
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    fontSize: 16,
                    color: '#979797',
                  }}>
                  {' '}
                  ₹ 45445
                </Text>
                <Text style={{ color: 'green' }}> 10% Off</Text>
              </Text>
              <View>
                <View style={styles.nestedButtonView}>
                  <Icon
                    style={{ fontSize: 15, marginTop: 5, color: 'green' }}
                    name="tag"
                    type="MaterialCommunityIcons"
                  />
                  <Text style={styles.buttonText}>
                    Extra 5% off* with Axis Bank Buzz Credit Card
                  </Text>
                </View>
                <View style={styles.nestedButtonView}>
                  <Icon
                    style={{ fontSize: 15, marginTop: 5, color: 'green' }}
                    name="tag"
                    type="MaterialCommunityIcons"
                  />
                  <Text style={styles.buttonText}>
                    Rs500 Instant Discount with HDFC Bank and Credit Cards
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', margin: 14 }}>
                <View
                  style={[
                    styles.containerHorizontal,
                    styles.containerRightBorder,
                  ]}>
                  <Text style={styles.TextGreyBold}>
                    FREE Delivery by tomorrow
                  </Text>
                </View>
                <View
                  style={[
                    styles.containerHorizontal,
                    styles.containerRightBorder,
                  ]}>
                  <Text style={styles.TextGreyBold}>
                    No cost EMI Rs.3000/Month
                  </Text>
                </View>
                <View style={styles.containerHorizontal}>
                  <Text style={[styles.TextGreyBold, { flex: 1 }]}>
                    Product exchange
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopWidth: 1,
                borderColor: '#dedede',
              }}>
              <View
                style={[
                  styles.containerHorizontal,
                  styles.containerRightBorder,
                ]}>
                <Button full light style={{ backgroundColor: 'white' }}>
                  <Icon
                    name="share-variant"
               type="MaterialCommunityIcons"
                    style={{ fontSize: 18, color: '#979797' }}
                  />
                  <Text>Share</Text>
                </Button>
              </View>
              <View style={[styles.containerHorizontal]}>
                <Button full light style={{ backgroundColor: 'white' }}>
                  <Text>Add to WishList</Text>
                </Button>
              </View>
            </View>
          </Card>
        </ScrollView>
        <View style={styles.bottomView}>
          <Button
            full
            light
            onPress={
              this.addToCart
            }
            style={{
              backgroundColor: '#fff',
            }}>
            <Text style={styles.textStyle}>ADD TO CART</Text>
          </Button>
        </View>
      </View>
    );
  }
  addToCart =() => {
    this.props.dispatch(addToCart());
    console.log("Count",this.props.count);
  }
  
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const styles = StyleSheet.create({
  SubmitButtonStyle: {
    padding: 2,
    backgroundColor: 'green',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  nestedButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    marginLeft: 10,
    color: '#3c3c3c',
  },
  TextGreyBold: {
    color: '#818181',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  containerHorizontal: {
    flex: 1,
    alignItems: 'center',
  },
  containerRightBorder: {
    borderRightWidth: 1,
    borderColor: '#dedede',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    padding: 18,
  },
  bottomView: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  textStyle: {  
    color: '#FF9800',
    fontSize: 15,
    fontWeight:'bold',
    flex:1,
    textAlign:'center',
  },
});
export default connect(mapStateToProps)(ProductDetail);
