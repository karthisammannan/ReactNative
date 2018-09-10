import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { Left } from 'native-base';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('productDetail', {
            image: this.props.image,
            title: this.props.name,
          })}>
          <Card containerStyle={{ padding: 0, margin: 0 }}>
            <View style={{ flexDirection: 'row', height: 120 }}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: this.props.image }}
                  resizeMode="center"
                />
              </View>
              <View style={styles.contentContainer}>
                <View >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {this.props.name}
                  </Text>
                  <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                    <Text style={styles.SubmitButtonStyle}>
                      <Text style={styles.TextStyle}>{this.props.rating}</Text>
                    </Text>
                  </View>
                  <Text
                    style={{
                      flexWrap: 'wrap',
                    }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                      ₹ {this.props.offered_price}
                    </Text>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                      }}>
                      ₹ {this.props.old_price}
                    </Text>
                    <Text style={{ color: '#8e908c' }}>{this.props.offer}</Text>
                  </Text>
                  <Text style={{ fontSize: 12, color: '#8e908c' }}>
                    {this.props.feature}
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  SubmitButtonStyle: {
    padding: 2,
    backgroundColor: 'green',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  imageContainer: {
    width: '25%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    width: '75%',
    paddingLeft: 8,
    justifyContent: 'center',
  },
});
