import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class DashboardItem2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={{ padding: 0, marginTop: 10, margin: 0 }}>
          <View style={{ flexDirection: 'row', height: 200 }}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: '70%',
                  padding:10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{
                    uri:
                      'https://rukminim1.flixcart.com/image/402/402/jjrgosw0/computer/j/v/j/asus-na-laptop-original-imaf79eyfrytjbgz.jpeg?q=70',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: '30%',
                  marginLeft: 14,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Dell Inspiron 15 7572 Laptop w/ Intel Core - 8GB Memory - 256
                  GB SSD
                </Text>
                <Text style={{ fontSize: 12, color: 'orange' }}>
                  5% Off  ₹ 120000/-
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
});
