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

class GiftRegistryTab extends Component {
  
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{  flex: 1 }}>
        <Container style={{ backgroundColor: '#FAFAFA' }}>
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
                Gift Registry
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
                  'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7e0809a2fecc3674c5f989b55902d357',
                //https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif',
              }}
              resizeMode="contain"
            />
            <Text> Gift Registry is empty!</Text>
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
export default GiftRegistryTab;