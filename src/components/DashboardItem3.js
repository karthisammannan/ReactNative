import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class DashboardItem3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={{ padding: 0, margin: 12 }}>
          <View
            style={{
              padding: 15,
              borderBottomWidth: 0.4,
              borderColor: '#c5c5c5',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '80%' }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#202124',
                  }}>
                  Mobile
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    color: '#61656A',
                  }}>
                  Under  ₹ 7000
                </Text>
              </View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}>
                <Text style={styles.TextStyle}> View all </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 160 }}>
            <View
              style={{
                width: '50%',
                height: "100%",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding:8,
                borderRightWidth: 0.4,
                borderColor: '#c5c5c5',
              }}>
              <Image
                style={{ width: "100%", height: null,flex:1}}
                source={{
                  uri:
                    'https://staticshop.o2.co.uk/product/images/iphone-x-space-grey-sku-header.png?cb=25dc5afb0412fc40a28aa29d82cb53d0',
                }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 14 }}>Iphone X</Text>
              <Text style={{ fontSize: 12, color: 'green' }}>
                10 % Off  ₹ 90000/-
              </Text>
            </View>
            <View style={{        
                width: '50%',
                height: "100%",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding:8,
              }}>
              <Image
                style={{ width: '100%', height: null,flex:1}}
                source={{
                  uri:
            'https://avatars.mds.yandex.net/get-mpic/932277/img_id195231539927885682.png/8hq',
            
                }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 14 }}>Oneplus 6</Text>
              <Text style={{ fontSize: 12, color: 'green' }}>
                10 % Off  ₹ 34,999/-
              </Text>
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
  SubmitButtonStyle: {
    padding: 4,
    backgroundColor: '#242B38',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});
