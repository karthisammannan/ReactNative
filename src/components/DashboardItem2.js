import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class DashboardItem2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate('Products', {
              title: this.props.title,
            })
          }>
          <Card containerStyle={{ padding: 0, marginTop: 6, margin: 0 }}>
            <View style={{ flexDirection: 'row', height: 200 }}>
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    height: '70%',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{
                      uri:
                        'https://images-na.ssl-images-amazon.com/images/I/51DE4FICRGL.jpg',
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
                    Nikon D5600 Digital Camera 18-55mm VR Kit (Black)
                  </Text>
                  <Text style={{ fontSize: 12, color: 'orange' }}>
                    22% Off ₹ 43,600/-
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
});
