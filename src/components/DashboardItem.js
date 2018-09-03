import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class DashboardItem extends React.Component {
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
                  Laptop
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    color: '#61656A',
                  }}>
                  Under ₹ 40000
                </Text>
              </View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}>
                <Text style={styles.TextStyle}> View all </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 300 }}>
            <View
              style={{
                width: '60%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 0.4,
                borderColor: '#c5c5c5',
              }}>
              <Image
                style={{ width: '100%', height: '60%' }}
                source={{
                  uri:
                    'https://rukminim1.flixcart.com/image/452/452/jjrgosw0/computer/j/v/j/asus-na-laptop-original-imaf79eyfrytjbgz.jpeg?q=70',
                }}
                resizeMode="center"
              />
              <Text style={{ fontSize: 14 }}>Windows</Text>
              <Text style={{ fontSize: 12, color: 'green' }}>
                10 % Off  ₹ 20000/-
              </Text>
            </View>
            <View style={{ flexDirection: 'column', width: '40%',}}>
              <View
                style={{
                  height:150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 0.4,
                  borderColor: '#c5c5c5',
                }}>
                <Image
                  style={{ width: '100%', height: '70%' }}
                  source={{
                    uri:
                      'https://rukminim1.flixcart.com/image/232/232/computer/r/x/u/apple-macbook-pro-notebook-original-imaepax8usdzrh5h.jpeg?q=70',
                  }}
                  resizeMode="center"
                />
                <Text style={{ fontSize: 14 }}>Mac book pro</Text>
                <Text style={{ fontSize: 12, color: 'green' }}>
                  10 % Off  ₹ 200000/-
                </Text>
              </View>
              <View
                style={{
                  height:150,
                  alignItems: 'center',
                  justifyContent: 'center',
                
                }}>
                <Image
                  style={{ width: '100%', height: "70%" }}
                  source={{
                    uri:
                      'https://rukminim1.flixcart.com/image/312/312/j76i3rk0/computer/s/p/m/hp-laptop-original-imaexhfa8cgmfe2e.jpeg?q=70',
                  }}
                  resizeMode="center"
                />
                <Text style={{ fontSize: 14 }}>Windows</Text>
                <Text style={{ fontSize: 12, color: 'green' }}>
                  10 % Off  ₹ 20000/-
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
