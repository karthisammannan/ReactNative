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

class WishListTab extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{  flex: 1 }}>
     
        <Container style={{ backgroundColor: '#FAFBFB' }}>
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
                Wishlist
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
                  'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c5ec2f1d6f1fca42b6fe18588a82fabb',
                //https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif',
              }}
              resizeMode="contain"
            />
            <Text>No items yet</Text>
          </View>
        </Container>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 130,
  },
});
export default WishListTab;
