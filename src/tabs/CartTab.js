import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';

class CartTab extends Component {

  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{  flex: 1 }}>
      <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />         
        <Container style={{ backgroundColor: '#fafafa' }}>
          <Header style={{ backgroundColor: '#fff' }}>
          <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        /> 
            <Body>
              <Title
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Cart
              </Title>
            </Body>
          </Header>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              style={styles.stretch}
              source={{
                uri:
                  'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e296a734dd35e9dd74374877f67f381e',
              }}
              resizeMode="contain"
            />
            <Text> Cart is empty!</Text>
          </View>
        </Container>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 150,
  },
});
export default CartTab;
